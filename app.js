/**
 * EACO Social App - Interaction Logic
 */

// State
let currentLang = 'en';
let currentCat = 'all';
let searchTerm = '';

// ===================== Init =====================
document.addEventListener('DOMContentLoaded', () => {
  detectLanguage();
  renderCategories();
  renderServices();
  renderEACO();
  renderPilotRegions();
  renderLanguages();
  renderLangDropdown();
  applyLanguage(currentLang);

  // Register Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
});

function detectLanguage() {
  const browserLang = (navigator.language || 'en').toLowerCase();
  const langMap = {
    'zh': 'zh', 'zh-cn': 'zh', 'zh-tw': 'zh', 'zh-hk': 'zh',
    'en': 'en', 'ar': 'ar', 'es': 'es', 'fr': 'fr', 'ru': 'ru',
    'ja': 'ja', 'ko': 'ko', 'vi': 'vi', 'th': 'th'
  };
  currentLang = langMap[browserLang] || (langMap[browserLang.split('-')[0]]) || 'en';
  // Default to English if neighbor language (only 6 global have full UI)
  if (!I18N[currentLang]) {
    currentLang = 'en';
  }
}

// ===================== Language =====================
function getI18N() {
  return I18N[currentLang] || I18N['en'];
}

function applyLanguage(lang) {
  currentLang = lang;
  const t = getI18N();

  // HTML lang & dir
  document.documentElement.lang = lang;
  document.body.dir = LANGUAGES[lang]?.rtl ? 'rtl' : 'ltr';

  // Update UI text
  document.getElementById('heroBadge').textContent = 'EACO Web3 + RWA + AI';
  document.getElementById('heroTitle').textContent = t.appName;
  document.getElementById('heroSubtitle').textContent = t.tagline;
  document.getElementById('statServices').textContent = t.services;
  document.getElementById('statCategories').textContent = currentLang === 'zh' ? '\u7C7B\u522B' : 'Categories';
  document.getElementById('statLanguages').textContent = t.langTitle;
  document.getElementById('statRegions').textContent = t.pilotTitle;
  document.getElementById('conceptTitle1').textContent = t.semiSocial;
  document.getElementById('conceptDesc1').textContent = t.semiSocialDesc;
  document.getElementById('conceptTitle2').textContent = t.threeKm;
  document.getElementById('conceptDesc2').textContent = currentLang === 'zh'
    ? '\u805A\u7126\u4E09\u516C\u91CC\u8303\u56F4\u5185\u7684\u670D\u52A1'
    : 'Focus on services within a 3-kilometer radius of your location';
  document.getElementById('conceptTitle3').textContent = t.eacoPay;
  document.getElementById('conceptDesc3').textContent = t.payWithEaco;
  document.getElementById('searchInput').placeholder = t.search;
  document.getElementById('servicesTitle').textContent = t.services;
  document.getElementById('resultsLabel').textContent = t.results;
  document.getElementById('eacoSubtitle').textContent = 'Earth\'s Best Coin | Solana | $e';
  document.getElementById('eacoMission').textContent = EACO_CONFIG.mission[lang] || EACO_CONFIG.mission.en;

  // EACO Definition
  document.getElementById('definitionLabel').textContent = currentLang === 'zh' ? 'EACO \u5B9A\u4E49' : 'EACO Definition';
  document.getElementById('definitionText').textContent = EACO_CONFIG.definition[lang] || EACO_CONFIG.definition.en;

  // EACO info labels
  document.getElementById('supplyLabel').textContent = currentLang === 'zh' ? '\u603B\u91CF' : 'Total Supply';
  document.getElementById('rateLabel').textContent = currentLang === 'zh' ? 'EACO 50\u56FD\u9884\u8A00\u673A\u6C47\u7387' : 'EACO 50-Country Oracle';

  document.getElementById('lpBadge').textContent = currentLang === 'zh'
    ? 'LP \u5408\u4F19\u4EBA\u8BA1\u5212: 1/5/10/50/100 SOL | 90\u5929\u9501\u4ED3'
    : 'LP Partner Program: 1/5/10/50/100 SOL | 90-day Lock';
  document.getElementById('verifyTitle').textContent = t.walletVerify;
  document.getElementById('verifyDesc').textContent = t.sendTest;
  document.getElementById('caLabel').textContent = t.ca;
  document.getElementById('dexLabel').textContent = t.dex;
  document.getElementById('tgLabel').textContent = t.community;
  document.getElementById('pilotTitle').textContent = t.pilotTitle;
  document.getElementById('langTitle').textContent = t.langTitle;
  document.getElementById('footerText').textContent = t.footer;
  document.getElementById('footerCopy').textContent = t.powered + ' | CA: ' + EACO_CONFIG.ca;
  document.getElementById('modalPayLabel').textContent = t.payWithEaco;
  document.getElementById('modalBtnTg').textContent = t.joinTelegram;

  // Update current lang display
  const langInfo = LANGUAGES[lang];
  document.getElementById('currentLangFlag').textContent = langInfo.flag;
  document.getElementById('currentLangName').textContent = langInfo.nativeName;

  // Re-render dependent content
  renderCategories();
  renderServices();
  renderLangDropdown();
  updateLangActive();
}

function toggleLangDropdown() {
  document.getElementById('langDropdown').classList.toggle('show');
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.lang-selector')) {
    document.getElementById('langDropdown').classList.remove('show');
  }
});

function renderLangDropdown() {
  const dropdown = document.getElementById('langDropdown');
  const t = getI18N();
  const globalLangs = Object.entries(LANGUAGES).filter(([k, v]) => v.type === 'global');
  const neighborLangs = Object.entries(LANGUAGES).filter(([k, v]) => v.type === 'neighbor');

  let html = '';
  html += `<div class="lang-section-title">${t.globalLangs}</div>`;
  html += '<div class="lang-grid">';
  globalLangs.forEach(([code, info]) => {
    html += `<div class="lang-option ${code === currentLang ? 'active' : ''}" onclick="applyLanguage('${code}');document.getElementById('langDropdown').classList.remove('show')">
      <span class="flag">${info.flag}</span>
      <span>${info.nativeName}</span>
    </div>`;
  });
  html += '</div>';

  html += `<div class="lang-section-title">${t.neighborLangs}</div>`;
  html += '<div class="lang-grid">';
  neighborLangs.forEach(([code, info]) => {
    html += `<div class="lang-option" onclick="applyNeighborLang('${code}')">
      <span class="flag">${info.flag}</span>
      <span>${info.nativeName}</span>
    </div>`;
  });
  html += '</div>';

  dropdown.innerHTML = html;
}

function applyNeighborLang(code) {
  // Neighbor languages use English UI but record preference
  const info = LANGUAGES[code];
  showToast(info.flag + ' ' + info.nativeName + ' selected (UI in English)');
  currentLang = 'en';
  applyLanguage('en');
  document.getElementById('langDropdown').classList.remove('show');
}

function updateLangActive() {
  document.querySelectorAll('.lang-option').forEach(el => el.classList.remove('active'));
}

// ===================== Categories =====================
function renderCategories() {
  const bar = document.getElementById('categoryBar');
  const t = getI18N();
  let html = `<div class="cat-chip ${currentCat === 'all' ? 'active' : ''}" onclick="selectCategory('all')">
    <span class="cat-emoji">\u2728</span>
    <span>${t.allCats}</span>
    <span class="cat-count">${SERVICES.length}</span>
  </div>`;

  CATEGORIES.forEach(cat => {
    const count = SERVICES.filter(s => s.cat === cat.id).length;
    const name = currentLang === 'zh' ? cat.zh : cat.en;
    html += `<div class="cat-chip ${currentCat === cat.id ? 'active' : ''}" onclick="selectCategory('${cat.id}')">
      <span class="cat-emoji">${cat.icon}</span>
      <span>${name}</span>
      <span class="cat-count">${count}</span>
    </div>`;
  });

  bar.innerHTML = html;
}

function selectCategory(catId) {
  currentCat = catId;
  renderCategories();
  renderServices();
}

// ===================== Services =====================
function renderServices() {
  const grid = document.getElementById('servicesGrid');
  const noResults = document.getElementById('noResults');
  const t = getI18N();

  let filtered = SERVICES;

  if (currentCat !== 'all') {
    filtered = filtered.filter(s => s.cat === currentCat);
  }

  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    filtered = filtered.filter(s =>
      s.zh.toLowerCase().includes(term) ||
      s.en.toLowerCase().includes(term) ||
      String(s.id).includes(term)
    );
  }

  document.getElementById('resultsCount').textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';

  grid.innerHTML = filtered.map(s => {
    const cat = CATEGORIES.find(c => c.id === s.cat);
    const catName = currentLang === 'zh' ? cat.zh : cat.en;
    const sName = currentLang === 'zh' ? s.zh : s.en;
    return `<div class="service-card" onclick="openModal(${s.id})">
      <span class="service-id">#${s.id}</span>
      <span class="service-emoji">${s.emoji}</span>
      <div class="service-name">${sName}</div>
      <div class="service-cat">${cat.icon} ${catName}</div>
      <div class="service-eaco"><span>$e</span> EACO</div>
    </div>`;
  }).join('');
}

function handleSearch(value) {
  searchTerm = value.trim();
  renderServices();
}

// ===================== Modal =====================
function openModal(serviceId) {
  const s = SERVICES.find(s => s.id === serviceId);
  if (!s) return;

  const cat = CATEGORIES.find(c => c.id === s.cat);
  const t = getI18N();
  const sName = currentLang === 'zh' ? s.zh : s.en;
  const catName = currentLang === 'zh' ? cat.zh : cat.en;

  document.getElementById('modalEmoji').textContent = s.emoji;
  document.getElementById('modalTitle').textContent = sName;
  document.getElementById('modalCat').textContent = cat.icon + ' ' + catName + ' | #' + s.id;
  document.getElementById('modalDesc').textContent = currentLang === 'zh'
    ? `\u8FD9\u662F\u4E00\u9879\u534A\u719F\u4EBA\u793E\u4EA4\u670D\u52A1\uFF0C\u670D\u52A1\u63D0\u4F9B\u8005\u53EF\u80FD\u662F\u60A8\u7684\u670B\u53CB\u3001\u90BB\u5C45\u6216\u7FA4\u53CB\u3002\u652F\u6301 EACO ($e) \u652F\u4ED8\u3002`
    : `This is a semi-acquaintance social service. The provider may be your friend, neighbor, or group member. EACO ($e) payment supported.`;
  document.getElementById('modalPayValue').textContent = 'EACO ($e) on Solana';

  document.getElementById('modalOverlay').classList.add('show');
}

function closeModal(event) {
  if (event.target === document.getElementById('modalOverlay')) {
    closeModalBtn();
  }
}

function closeModalBtn() {
  document.getElementById('modalOverlay').classList.remove('show');
}

function openTelegram() {
  const tgUrl = EACO_CONFIG.telegram[currentLang] || EACO_CONFIG.telegram.en;
  window.open(tgUrl, '_blank', 'noopener');
}

// ===================== EACO Section =====================
function renderEACO() {
  // TG Grid
  const tgGrid = document.getElementById('tgGrid');
  const tgLangs = [
    { code: 'en', flag: '\uD83C\uDDFA\uD83C\uDDF8', name: 'English' },
    { code: 'zh', flag: '\uD83C\uDDE8\uD83C\uDDF3', name: '\u4E2D\u6587' },
    { code: 'ar', flag: '\uD83C\uDDE6\uD83C\uDDEA', name: '\u0627\u0644\u0639\u0631\u0628\u064A\u0629' },
    { code: 'es', flag: '\uD83C\uDDEA\uD83C\uDDF8', name: 'Espa\u00F1ol' },
    { code: 'fr', flag: '\uD83C\uDDEB\uD83C\uDDF7', name: 'Fran\u00E7ais' },
    { code: 'ru', flag: '\uD83C\uDDF7\uD83C\uDDFA', name: '\u0420\u0443\u0441\u0441\u043A\u0438\u0439' },
    { code: 'ja', flag: '\uD83C\uDDEF\uD83C\uDDF5', name: '\u65E5\u672C\u8A9E' }
  ];

  tgGrid.innerHTML = tgLangs.map(l => {
    const url = EACO_CONFIG.telegram[l.code] || EACO_CONFIG.telegram.en;
    return `<a class="tg-card" href="${url}" target="_blank" rel="noopener">
      <span class="tg-flag">${l.flag}</span>
      <span>${l.name}</span>
    </a>`;
  }).join('');
}

// ===================== Pilot Regions =====================
function renderPilotRegions() {
  const grid = document.getElementById('pilotGrid');
  grid.innerHTML = PILOT_REGIONS.map(r => {
    const name = currentLang === 'zh' ? r.zh : r.en;
    return `<div class="pilot-card">
      <div class="pilot-flag">${r.flag}</div>
      <div class="pilot-name">${name}</div>
    </div>`;
  }).join('');
}

// ===================== Languages Display =====================
function renderLanguages() {
  const grid = document.getElementById('langCards');
  const t = getI18N();

  let html = '';
  const globalLangs = Object.entries(LANGUAGES).filter(([k, v]) => v.type === 'global');
  const neighborLangs = Object.entries(LANGUAGES).filter(([k, v]) => v.type === 'neighbor');

  // Global languages section label
  html += `<div style="grid-column:1/-1;font-size:12px;font-weight:700;color:var(--gray-500);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px">${t.globalLangs}</div>`;
  globalLangs.forEach(([code, info]) => {
    html += `<div class="lang-card">
      <div class="lang-card-flag">${info.flag}</div>
      <div class="lang-card-name">${info.nativeName}</div>
      <div class="lang-card-type global">Global</div>
    </div>`;
  });

  // Neighbor languages section label
  html += `<div style="grid-column:1/-1;font-size:12px;font-weight:700;color:var(--gray-500);text-transform:uppercase;letter-spacing:1px;margin:12px 0 4px">${t.neighborLangs}</div>`;
  neighborLangs.forEach(([code, info]) => {
    html += `<div class="lang-card">
      <div class="lang-card-flag">${info.flag}</div>
      <div class="lang-card-name">${info.nativeName}</div>
      <div class="lang-card-type neighbor">Neighbor</div>
    </div>`;
  });

  grid.innerHTML = html;
}

// ===================== Utility =====================
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function copyCA() {
  const ca = EACO_CONFIG.ca;
  navigator.clipboard.writeText(ca).then(() => {
    showToast('CA copied!');
    const btn = document.querySelector('.copy-btn');
    btn.classList.add('copied');
    setTimeout(() => btn.classList.remove('copied'), 2000);
  }).catch(() => {
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = ca;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showToast('CA copied!');
    } catch (e) {
      showToast('Copy failed');
    }
    document.body.removeChild(textarea);
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// Keyboard support
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModalBtn();
    document.getElementById('langDropdown').classList.remove('show');
  }
  // Ctrl/Cmd + K to focus search
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    document.getElementById('searchInput').focus();
  }
});
