// 豐巢咖啡 2026 台灣國際咖啡展 互動腳本

document.addEventListener("DOMContentLoaded", () => {
  initCountdown();
  renderPerks();
  renderProducts("all");
  setupCategoryFilters();
  setupSearch();
  setupFlavorFinder();
  renderSchedule(0);
  setupScheduleTabs();
  setupReservationForm();
  checkExistingReservation();
  setupMobileMenu();
  lucide.createIcons();
});

// === 1. 倒數計時器 (Target: 2026-11-16 10:00 AM) ===
function initCountdown() {
  const targetDate = new Date("2026-11-16T10:00:00+08:00").getTime();

  function update() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      document.getElementById("countdown-days").innerText = "00";
      document.getElementById("countdown-hours").innerText = "00";
      document.getElementById("countdown-mins").innerText = "00";
      document.getElementById("countdown-secs").innerText = "00";
      const statusPill = document.getElementById("countdown-status");
      if (statusPill) statusPill.innerText = "展會現正熱烈進行中！";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, "0");

    const daysEl = document.getElementById("countdown-days");
    const hoursEl = document.getElementById("countdown-hours");
    const minsEl = document.getElementById("countdown-mins");
    const secsEl = document.getElementById("countdown-secs");

    if (daysEl) daysEl.innerText = pad(days);
    if (hoursEl) hoursEl.innerText = pad(hours);
    if (minsEl) minsEl.innerText = pad(minutes);
    if (secsEl) secsEl.innerText = pad(seconds);
  }

  update();
  setInterval(update, 1000);
}

// === 2. 渲染展場 4 大好康 ===
function renderPerks() {
  const container = document.getElementById("perks-container");
  if (!container) return;

  container.innerHTML = EXPO_PERKS.map((perk) => `
    <div class="glass-card rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
      <div class="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all"></div>
      <div class="flex items-center gap-3 mb-4">
        <div class="w-12 h-12 rounded-xl bg-amber-900/40 border border-amber-600/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
          <i data-lucide="${perk.icon}" class="w-6 h-6"></i>
        </div>
        <span class="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
          ${perk.tag}
        </span>
      </div>
      <h3 class="text-lg font-bold text-stone-100 mb-2">${perk.title}</h3>
      <p class="text-stone-300 text-sm leading-relaxed">${perk.desc}</p>
    </div>
  `).join("");
}

// === 3. 產品卡片渲染與分類篩選 ===
let currentCategory = "all";
let searchQuery = "";

function renderProducts(category = "all", query = "") {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  let filtered = PRODUCTS;
  if (category !== "all") {
    filtered = filtered.filter((p) => p.category === category);
  }
  if (query.trim() !== "") {
    const q = query.toLowerCase();
    filtered = filtered.filter((p) =>
      p.name.toLowerCase().includes(q) ||
      p.origin.toLowerCase().includes(q) ||
      p.flavors.some((f) => f.toLowerCase().includes(q)) ||
      p.roast.toLowerCase().includes(q)
    );
  }

  const countEl = document.getElementById("products-count");
  if (countEl) countEl.innerText = `共 ${filtered.length} 款展場精選`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center text-stone-400">
        <i data-lucide="coffee" class="w-12 h-12 mx-auto mb-3 text-stone-600"></i>
        <p class="text-lg">查無符合的咖啡豆或商品</p>
        <p class="text-sm text-stone-500 mt-1">請嘗試其他關鍵字或重設分類</p>
        <button onclick="resetFilters()" class="mt-4 px-4 py-2 text-sm bg-amber-600/30 hover:bg-amber-600/50 text-amber-300 rounded-lg transition-colors">
          清除搜尋條件
        </button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  grid.innerHTML = filtered.map((product) => `
    <div class="glass-card rounded-2xl overflow-hidden hover:shadow-2xl hover:border-amber-500/50 transition-all duration-300 flex flex-col group">
      <!-- 產品頂部圖片與標籤 -->
      <div class="relative h-56 bg-stone-900/90 flex items-center justify-center p-6 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-t from-[#1a1412] via-transparent to-transparent z-10"></div>
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="max-h-44 w-auto object-contain z-0 group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
          loading="lazy"
          onerror="this.src='https://bcafe.magicship.xyz/wp-content/uploads/2026/06/10.svg'"
        />
        
        <!-- Badge -->
        <div class="absolute top-3 left-3 z-20">
          <span class="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-500/90 text-stone-950 font-bold shadow-lg backdrop-blur-sm">
            ${product.badge}
          </span>
        </div>

        <!-- 烘焙度與處理法標籤 -->
        <div class="absolute bottom-3 left-3 z-20 flex gap-1.5 flex-wrap">
          <span class="text-[11px] px-2 py-0.5 rounded bg-stone-900/80 text-amber-300 border border-amber-600/30 backdrop-blur-sm">
            ${product.roast}
          </span>
          <span class="text-[11px] px-2 py-0.5 rounded bg-stone-900/80 text-stone-300 border border-stone-700 backdrop-blur-sm">
            ${product.process.split(" ")[0]}
          </span>
        </div>
      </div>

      <!-- 產品資訊內文 -->
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div class="text-xs text-amber-400/80 font-medium tracking-wide mb-1 flex items-center gap-1.5">
            <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
            <span>${product.origin}</span>
          </div>

          <h3 class="text-lg font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 leading-snug mb-1">
            ${product.name}
          </h3>

          <p class="text-xs text-stone-400 italic mb-3">
            「${product.poeticTitle}」
          </p>

          <!-- 風味標籤 -->
          <div class="flex flex-wrap gap-1.5 mb-4">
            ${product.flavors.slice(0, 4).map((f) => `
              <span class="text-xs px-2 py-0.5 rounded-full bg-stone-800/80 text-amber-200/90 border border-amber-900/40">
                ${f}
              </span>
            `).join("")}
          </div>
        </div>

        <!-- 價格與操作按鈕 -->
        <div class="pt-4 border-t border-stone-800/80">
          <div class="flex items-baseline justify-between mb-3">
            <div>
              <span class="text-xs text-stone-400 mr-1">展場價</span>
              <span class="text-2xl font-black text-amber-400 font-mono">NT$${product.expoPrice}</span>
              <span class="text-xs text-stone-500 line-through ml-1.5">NT$${product.price}</span>
            </div>
            <span class="text-xs text-stone-400">${product.weight}</span>
          </div>

          <div class="grid grid-cols-2 gap-2">
            <button 
              onclick="openProductModal(${product.id})"
              class="w-full py-2.5 px-3 rounded-xl bg-stone-800/90 hover:bg-stone-700 text-stone-200 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors border border-stone-700"
            >
              <i data-lucide="book-open" class="w-3.5 h-3.5"></i>
              風味手冊
            </button>
            <a 
              href="${product.permalink}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-stone-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md btn-shimmer"
            >
              <span>官網購買</span>
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  lucide.createIcons();
}

function setupCategoryFilters() {
  const buttons = document.querySelectorAll("[data-category-btn]");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => {
        b.classList.remove("bg-amber-600", "text-stone-950", "font-bold", "shadow-lg");
        b.classList.add("bg-stone-800/80", "text-stone-300", "hover:bg-stone-700");
      });
      btn.classList.add("bg-amber-600", "text-stone-950", "font-bold", "shadow-lg");
      btn.classList.remove("bg-stone-800/80", "text-stone-300", "hover:bg-stone-700");

      currentCategory = btn.getAttribute("data-category-btn");
      renderProducts(currentCategory, searchQuery);
    });
  });
}

function setupSearch() {
  const input = document.getElementById("product-search-input");
  if (!input) return;

  input.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderProducts(currentCategory, searchQuery);
  });
}

function resetFilters() {
  const input = document.getElementById("product-search-input");
  if (input) input.value = "";
  searchQuery = "";
  currentCategory = "all";
  const allBtn = document.querySelector('[data-category-btn="all"]');
  if (allBtn) allBtn.click();
  else renderProducts("all");
}

// === 4. 產品詳情 Modal 彈窗 ===
function openProductModal(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("product-modal");
  const modalContent = document.getElementById("modal-body");
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="relative">
      <!-- 頂部圖片與基本概覽 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="bg-stone-900/80 rounded-2xl p-6 flex items-center justify-center relative border border-stone-800">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            class="max-h-60 w-auto object-contain drop-shadow-2xl"
          />
          <div class="absolute top-3 left-3">
            <span class="text-xs px-2.5 py-1 rounded-full bg-amber-500 text-stone-950 font-bold">
              ${product.badge}
            </span>
          </div>
        </div>

        <div class="flex flex-col justify-between">
          <div>
            <div class="text-xs text-amber-400 font-medium mb-1">
              ${product.origin} ‧ ${product.farm}
            </div>
            <h2 class="text-2xl font-bold text-stone-100 leading-tight mb-2">
              ${product.name}
            </h2>
            <p class="text-sm text-stone-400 italic mb-4">
              「${product.poeticTitle}」
            </p>

            <div class="grid grid-cols-2 gap-2 text-xs mb-4">
              <div class="p-2.5 rounded-xl bg-stone-900/60 border border-stone-800">
                <span class="text-stone-400 block mb-0.5">烘焙度</span>
                <span class="text-amber-300 font-semibold">${product.roast}</span>
              </div>
              <div class="p-2.5 rounded-xl bg-stone-900/60 border border-stone-800">
                <span class="text-stone-400 block mb-0.5">處理法</span>
                <span class="text-stone-200 font-semibold">${product.process}</span>
              </div>
              <div class="p-2.5 rounded-xl bg-stone-900/60 border border-stone-800">
                <span class="text-stone-400 block mb-0.5">種植海拔</span>
                <span class="text-stone-200 font-semibold">${product.altitude}</span>
              </div>
              <div class="p-2.5 rounded-xl bg-stone-900/60 border border-stone-800">
                <span class="text-stone-400 block mb-0.5">規格</span>
                <span class="text-stone-200 font-semibold">${product.weight}</span>
              </div>
            </div>
          </div>

          <div class="pt-4 border-t border-stone-800 flex items-center justify-between">
            <div>
              <span class="text-xs text-stone-400 block">展場特惠價</span>
              <div class="flex items-baseline gap-2">
                <span class="text-3xl font-black text-amber-400 font-mono">NT$${product.expoPrice}</span>
                <span class="text-sm text-stone-500 line-through">NT$${product.price}</span>
              </div>
            </div>
            <a 
              href="${product.permalink}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-stone-950 font-bold text-sm flex items-center gap-2 shadow-lg btn-shimmer"
            >
              <span>官網線上購買</span>
              <i data-lucide="external-link" class="w-4 h-4"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- 風味筆記與描述 -->
      <div class="mb-6 p-4 rounded-2xl bg-amber-950/20 border border-amber-800/30">
        <h4 class="text-sm font-bold text-amber-300 flex items-center gap-1.5 mb-2">
          <i data-lucide="sparkles" class="w-4 h-4"></i>
          杯測風味描述
        </h4>
        <p class="text-stone-300 text-sm leading-relaxed mb-3">
          ${product.description}
        </p>
        <div class="flex flex-wrap gap-2">
          ${product.flavors.map((f) => `
            <span class="text-xs px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-200 border border-amber-600/40">
              # ${f}
            </span>
          `).join("")}
        </div>
      </div>

      <!-- 職人沖煮指南 -->
      <div class="p-4 rounded-2xl bg-stone-900/60 border border-stone-800">
        <h4 class="text-sm font-bold text-stone-200 flex items-center gap-1.5 mb-3">
          <i data-lucide="droplet" class="w-4 h-4 text-amber-400"></i>
          豐巢烘豆師私房沖煮指南
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mb-3">
          <div class="p-2.5 rounded-lg bg-stone-800/60">
            <span class="text-stone-400 block mb-0.5">推薦水溫</span>
            <span class="text-amber-300 font-mono font-bold">${product.brewGuide.waterTemp}</span>
          </div>
          <div class="p-2.5 rounded-lg bg-stone-800/60">
            <span class="text-stone-400 block mb-0.5">粉水比例</span>
            <span class="text-stone-200 font-mono font-bold">${product.brewGuide.ratio}</span>
          </div>
          <div class="p-2.5 rounded-lg bg-stone-800/60">
            <span class="text-stone-400 block mb-0.5">建議研磨度</span>
            <span class="text-stone-200 font-semibold">${product.brewGuide.grind}</span>
          </div>
        </div>
        <p class="text-xs text-stone-400 bg-stone-800/30 p-2.5 rounded-lg border-l-2 border-amber-500">
          💡 <span class="text-stone-300">沖煮小技巧：</span>${product.brewGuide.tip}
        </p>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
  lucide.createIcons();
}

function closeProductModal() {
  const modal = document.getElementById("product-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

// === 5. 風味尋豆指南 (Flavor Recommender) ===
function setupFlavorFinder() {
  const buttons = document.querySelectorAll("[data-flavor-profile]");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const profile = btn.getAttribute("data-flavor-profile");
      buttons.forEach((b) => b.classList.remove("ring-2", "ring-amber-400", "scale-105"));
      btn.classList.add("ring-2", "ring-amber-400", "scale-105");

      let keyword = "";
      if (profile === "floral") keyword = "藝伎";
      else if (profile === "fruity") keyword = "水洗";
      else if (profile === "sweet") keyword = "蜜神";
      else if (profile === "nutty") keyword = "杏仁";
      else if (profile === "dark") keyword = "深焙";

      const searchInput = document.getElementById("product-search-input");
      if (searchInput) {
        searchInput.value = keyword;
        searchQuery = keyword;
        renderProducts("all", keyword);
        // 滾動至商品區
        const target = document.getElementById("products-section");
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
        showToast(`已為您篩選【${btn.innerText.trim()}】推薦豆款！`);
      }
    });
  });
}

// === 6. 展期每日活動時程 (Schedule Tabs) ===
function renderSchedule(dayIndex) {
  const container = document.getElementById("schedule-content");
  if (!container) return;

  const dayData = EXPO_SCHEDULE[dayIndex];
  if (!dayData) return;

  container.innerHTML = `
    <div class="mb-6 pb-4 border-b border-stone-800 flex items-center justify-between">
      <div>
        <span class="text-xs px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
          ${dayData.day}
        </span>
        <h3 class="text-xl font-bold text-stone-100 mt-2">${dayData.theme}</h3>
      </div>
      <div class="text-xs text-stone-400 flex items-center gap-1.5">
        <i data-lucide="map-pin" class="w-4 h-4 text-amber-400"></i>
        <span>豐巢特展吧台 (M816)</span>
      </div>
    </div>

    <div class="space-y-4">
      ${dayData.events.map((ev) => `
        <div class="p-5 rounded-2xl bg-stone-900/60 border border-stone-800/80 hover:border-amber-600/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div class="flex items-start gap-4">
            <div class="px-3 py-1.5 rounded-xl bg-amber-900/30 text-amber-400 border border-amber-700/30 font-mono font-bold text-xs whitespace-nowrap">
              ${ev.time}
            </div>
            <div>
              <h4 class="text-base font-bold text-stone-100 mb-1">${ev.title}</h4>
              <p class="text-xs text-stone-400 leading-relaxed">${ev.desc}</p>
            </div>
          </div>
          <div class="flex items-center gap-2 self-start md:self-auto text-xs text-amber-300/80 bg-stone-800/60 px-3 py-1.5 rounded-lg border border-stone-700">
            <i data-lucide="user-check" class="w-3.5 h-3.5"></i>
            <span>${ev.speaker}</span>
          </div>
        </div>
      `).join("")}
    </div>
  `;

  lucide.createIcons();
}

function setupScheduleTabs() {
  const tabs = document.querySelectorAll("[data-schedule-tab]");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.remove("bg-amber-600", "text-stone-950", "font-bold");
        t.classList.add("bg-stone-800/80", "text-stone-300");
      });
      tab.classList.add("bg-amber-600", "text-stone-950", "font-bold");
      tab.classList.remove("bg-stone-800/80", "text-stone-300");

      const idx = parseInt(tab.getAttribute("data-schedule-tab"), 10);
      renderSchedule(idx);
    });
  });
}

// === 7. 展前 VIP 試飲預約表單 ===
function setupReservationForm() {
  const form = document.getElementById("reservation-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("res-name").value.trim();
    const phone = document.getElementById("res-phone").value.trim();
    const email = document.getElementById("res-email").value.trim();
    const date = document.getElementById("res-date").value;
    const pref = document.getElementById("res-pref").value;
    const notes = document.getElementById("res-notes")?.value.trim() || "";

    if (!name || !phone || !date) {
      showToast("請填寫姓名、電話與預約日期！", true);
      return;
    }

    const resId = "BCAFE-" + Math.floor(100000 + Math.random() * 900000);
    const reservationData = {
      id: resId,
      name,
      phone,
      email,
      date,
      pref,
      notes,
      createdAt: new Date().toISOString()
    };

    localStorage.setItem("bcafe_expo_reservation", JSON.stringify(reservationData));
    displayVipPass(reservationData);
    showToast("預約成功！已為您生成展場 VIP 試飲邀請卡！");
  });
}

function checkExistingReservation() {
  const saved = localStorage.getItem("bcafe_expo_reservation");
  if (saved) {
    try {
      const data = JSON.parse(saved);
      displayVipPass(data);
    } catch (e) {
      console.error(e);
    }
  }
}

function displayVipPass(data) {
  const passContainer = document.getElementById("vip-pass-display");
  const formContainer = document.getElementById("reservation-form-container");
  if (!passContainer || !formContainer) return;

  passContainer.innerHTML = `
    <div class="ticket-pass rounded-3xl p-8 text-stone-100 max-w-lg mx-auto">
      <div class="flex items-center justify-between pb-4 border-b border-amber-600/30 mb-6">
        <div class="flex items-center gap-3">
          <img 
            src="https://i0.wp.com/bcafe.magicship.xyz/wp-content/uploads/2024/10/462180734_1054978076100467_2733890952153626445_n-removebg-preview.png?fit=500%2C500&ssl=1" 
            alt="豐巢咖啡" 
            class="w-10 h-10 object-contain"
          />
          <div>
            <span class="text-xs font-bold text-amber-400 tracking-wider">豐巢咖啡 ‧ 2026 咖啡展</span>
            <h4 class="text-sm font-semibold text-stone-200">VIP 品飲貴賓邀請憑證</h4>
          </div>
        </div>
        <span class="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold border border-amber-500/40">
          已確認
        </span>
      </div>

      <div class="grid grid-cols-2 gap-4 text-xs mb-6">
        <div>
          <span class="text-stone-400 block mb-0.5">貴賓姓名</span>
          <span class="text-base font-bold text-stone-100">${data.name}</span>
        </div>
        <div>
          <span class="text-stone-400 block mb-0.5">憑證編號</span>
          <span class="text-base font-mono font-bold text-amber-400">${data.id}</span>
        </div>
        <div>
          <span class="text-stone-400 block mb-0.5">預約造訪日期</span>
          <span class="text-sm font-semibold text-stone-200">${data.date}</span>
        </div>
        <div>
          <span class="text-stone-400 block mb-0.5">偏好風味</span>
          <span class="text-sm font-semibold text-amber-300">${data.pref}</span>
        </div>
      </div>

      <!-- 憑證條碼與攤位指引 -->
      <div class="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 text-center mb-6">
        <div class="font-mono tracking-widest text-lg font-bold text-amber-400 mb-1">
          ||||| | |||| ||| |||| | ||||||
        </div>
        <p class="text-xs text-stone-400">
          南港展覽館 1 館 4 樓 ‧ 攤位 <span class="text-amber-300 font-bold">M816</span>
        </p>
        <p class="text-[11px] text-amber-400/90 mt-1">
          🎁 出示本頁面即可於吧台兌換「鑑賞級濾掛咖啡」乙包！
        </p>
      </div>

      <div class="flex gap-2">
        <button 
          onclick="window.print()" 
          class="flex-1 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors border border-stone-700"
        >
          <i data-lucide="printer" class="w-3.5 h-3.5"></i>
          列印或儲存憑證
        </button>
        <button 
          onclick="resetReservation()" 
          class="py-2.5 px-4 rounded-xl bg-red-950/40 hover:bg-red-900/40 text-red-300 text-xs transition-colors border border-red-800/30"
        >
          重新預約
        </button>
      </div>
    </div>
  `;

  passContainer.classList.remove("hidden");
  formContainer.classList.add("hidden");
  lucide.createIcons();
}

function resetReservation() {
  localStorage.removeItem("bcafe_expo_reservation");
  const passContainer = document.getElementById("vip-pass-display");
  const formContainer = document.getElementById("reservation-form-container");
  if (passContainer) passContainer.classList.add("hidden");
  if (formContainer) formContainer.classList.remove("hidden");
}

// === 8. 導航與行動選單 ===
function setupMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  const links = menu.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
}

// === 9. 輕量 Toast 提示 ===
function showToast(message, isError = false) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.className = "fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl shadow-2xl backdrop-blur-md flex items-center gap-2.5 text-sm transition-all duration-300 transform translate-y-12 opacity-0 pointer-events-none";
    document.body.appendChild(toast);
  }

  if (isError) {
    toast.className = "fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl shadow-2xl backdrop-blur-md flex items-center gap-2.5 text-sm bg-red-950/90 text-red-200 border border-red-700/50 transition-all duration-300 transform translate-y-0 opacity-100";
    toast.innerHTML = `<i data-lucide="alert-circle" class="w-4 h-4 text-red-400"></i><span>${message}</span>`;
  } else {
    toast.className = "fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl shadow-2xl backdrop-blur-md flex items-center gap-2.5 text-sm bg-stone-900/95 text-amber-200 border border-amber-600/40 transition-all duration-300 transform translate-y-0 opacity-100";
    toast.innerHTML = `<i data-lucide="check-circle-2" class="w-4 h-4 text-amber-400"></i><span>${message}</span>`;
  }

  lucide.createIcons();

  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-12", "opacity-0");
  }, 3500);
}
