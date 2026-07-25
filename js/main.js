/**
 * EACO Website - Main JavaScript
 * Handles: language switching, theme toggle, content rendering, animations
 */

(function () {
  'use strict';

  // ============================================
  // State
  // ============================================
  let currentLang = localStorage.getItem('eaco-lang') || 'en';
  let currentTheme = localStorage.getItem('eaco-theme') || 'dark';

  // ============================================
  // Language Management
  // ============================================
  function getLangList() {
    return [
      { code: 'en', name: 'English', flag: 'EN' },
      { code: 'zh', name: '中文', flag: 'ZH' },
      { code: 'es', name: 'Espanol', flag: 'ES' },
      { code: 'fr', name: 'Francais', flag: 'FR' },
      { code: 'ar', name: 'العربية', flag: 'AR' },
      { code: 'ru', name: 'Русский', flag: 'RU' },
      { code: 'de', name: 'Deutsch', flag: 'DE' },
      { code: 'it', name: 'Italiano', flag: 'IT' },
      { code: 'nl', name: 'Nederlands', flag: 'NL' },
      { code: 'pl', name: 'Polski', flag: 'PL' }
    ];
  }

  function buildLangDropdown() {
    var dropdown = document.getElementById('langDropdown');
    if (!dropdown) return;
    var langs = getLangList();
    var html = '';
    for (var i = 0; i < langs.length; i++) {
      var l = langs[i];
      var active = l.code === currentLang ? ' active' : '';
      html += '<div class="lang-option' + active + '" onclick="setLanguage(\'' + l.code + '\')">' +
        '<span class="lang-flag">' + l.flag + '</span>' +
        '<span>' + l.name + '</span>' +
        '</div>';
    }
    dropdown.innerHTML = html;
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('eaco-lang', lang);
    applyTranslations();
    updateLangButton();
    buildLangDropdown();
    document.getElementById('langDropdown').classList.remove('active');
  }

  function updateLangButton() {
    var langs = getLangList();
    for (var i = 0; i < langs.length; i++) {
      if (langs[i].code === currentLang) {
        document.getElementById('currentLangFlag').textContent = langs[i].flag;
        var btn = document.querySelector('.lang-btn .lang-full');
        if (btn) btn.textContent = langs[i].name;
        break;
      }
    }
  }

  function t(key) {
    var keys = key.split('.');
    var val = translations[currentLang];
    for (var i = 0; i < keys.length; i++) {
      if (val) val = val[keys[i]];
    }
    return val !== undefined ? val : key;
  }

  function applyTranslations() {
    // Set HTML lang and dir
    var meta = translations[currentLang]._meta;
    document.documentElement.lang = currentLang;
    document.documentElement.dir = meta.dir;

    // Update all data-i18n elements
    var elements = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < elements.length; i++) {
      var key = elements[i].getAttribute('data-i18n');
      var val = t(key);
      if (val && typeof val === 'string') {
        elements[i].textContent = val;
      }
    }

    // Render dynamic content
    renderPriceStages();
    renderPriceSteps();
    renderGdpTable();
    renderAssets();
    renderModel();
    renderEci();
    renderAiModules();
    renderRoadmap();
    renderWhitepaper();
    renderWeb3Countries();
  }

  // ============================================
  // Theme Toggle
  // ============================================
  function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('eaco-theme', currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
  }

  function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }

  // ============================================
  // Content Rendering
  // ============================================

  function renderPriceStages() {
    var data = t('price.stages');
    if (!Array.isArray(data)) return;
    var html = '';
    for (var i = 0; i < data.length; i++) {
      var s = data[i];
      html += '<div class="price-card">' +
        '<div class="price-value">' + s.value + '</div>' +
        '<div class="price-name">' + s.name + '</div>' +
        '<p class="price-desc">' + s.desc + '</p>' +
        '</div>';
    }
    document.getElementById('priceStages').innerHTML = html;
  }

  function renderPriceSteps() {
    var data = t('price.steps');
    if (!Array.isArray(data)) return;
    var html = '';
    for (var i = 0; i < data.length; i++) {
      var s = data[i];
      html += '<div class="step-card">' +
        '<span class="step-phase">' + s.phase + '</span>' +
        '<h4 class="step-title">' + s.title + '</h4>' +
        '<p class="step-time">' + s.time + '</p>' +
        '<p class="step-desc">' + s.desc + '</p>' +
        '</div>';
    }
    document.getElementById('priceSteps').innerHTML = html;
  }

  function renderGdpTable() {
    var headerLabels = t('gdp.tableHeader');
    var countries = t('gdp.countries');

    // Header
    var headerHtml = '';
    if (Array.isArray(headerLabels)) {
      for (var i = 0; i < headerLabels.length; i++) {
        headerHtml += '<th>' + headerLabels[i] + '</th>';
      }
    }
    document.getElementById('gdpTableHeader').innerHTML = headerHtml;

    // Body
    var bodyHtml = '';
    if (Array.isArray(countries)) {
      for (var j = 0; j < countries.length; j++) {
        var c = countries[j];
        var priorityClass = 'priority-3';
        if (c.priority.indexOf('1') !== -1) priorityClass = 'priority-1';
        else if (c.priority.indexOf('2') !== -1) priorityClass = 'priority-2';

        bodyHtml += '<tr>' +
          '<td class="gdp-rank">' + c.rank + '</td>' +
          '<td><span class="gdp-flag">' + getFlagEmoji(c.flag) + '</span>' + c.name + '</td>' +
          '<td>' + c.gdp + '</td>' +
          '<td><span class="gdp-priority ' + priorityClass + '">' + c.priority + '</span></td>' +
          '</tr>';
      }
    }
    document.getElementById('gdpTableBody').innerHTML = bodyHtml;

    // Source & insight
    document.getElementById('gdpSource').textContent = t('gdp.source');
    document.getElementById('gdpInsight').textContent = t('gdp.insight');
  }

  function getFlagEmoji(code) {
    var flags = {
      'DE': '\uD83C\uDDE9\uD83C\uDDEA',
      'GB': '\uD83C\uDDEC\uD83C\uDDE7',
      'FR': '\uD83C\uDDEB\uD83C\uDDF7',
      'IT': '\uD83C\uDDEE\uD83C\uDDF9',
      'RU': '\uD83C\uDDF7\uD83C\uDDFA',
      'ES': '\uD83C\uDDEA\uD83C\uDDF8',
      'NL': '\uD83C\uDDF3\uD83C\uDDF1',
      'CH': '\uD83C\uDDE8\uD83C\uDDED',
      'PL': '\uD83C\uDDF5\uD83C\uDDF1',
      'IE': '\uD83C\uDDEE\uD83C\uDDEA',
      'LU': '\uD83C\uDDF1\uD83C\uDDFA',
      'MT': '\uD83C\uDDF2\uD83C\uDDF9',
      'EE': '\uD83C\uDDEA\uD83C\uDDEA',
      'PT': '\uD83C\uDDF5\uD83C\uDDF9'
    };
    return flags[code] || code;
  }

  function renderAssets() {
    var categories = t('assets.categories');
    var html = '';
    if (Array.isArray(categories)) {
      for (var i = 0; i < categories.length; i++) {
        var cat = categories[i];
        var itemsHtml = '';
        if (Array.isArray(cat.items)) {
          for (var j = 0; j < cat.items.length; j++) {
            itemsHtml += '<li>' + cat.items[j] + '</li>';
          }
        }
        html += '<div class="asset-category">' +
          '<div class="asset-header">' +
          '<div class="asset-icon ' + cat.color + '">' + cat.icon + '</div>' +
          '<div>' +
          '<div class="asset-name">' + cat.name + '</div>' +
          '<span class="asset-liquidity">' + cat.liquidity + '</span>' +
          '</div>' +
          '</div>' +
          '<ul class="asset-items">' + itemsHtml + '</ul>' +
          '</div>';
      }
    }
    document.getElementById('assetsGrid').innerHTML = html;

    // Summary table
    var tableData = t('assets.table');
    if (tableData) {
      var headerHtml = '';
      if (Array.isArray(tableData.headers)) {
        for (var h = 0; h < tableData.headers.length; h++) {
          headerHtml += '<th>' + tableData.headers[h] + '</th>';
        }
      }
      document.getElementById('assetsTableHeader').innerHTML = headerHtml;

      var bodyHtml = '';
      if (Array.isArray(tableData.rows)) {
        for (var r = 0; r < tableData.rows.length; r++) {
          var row = tableData.rows[r];
          bodyHtml += '<tr>';
          if (Array.isArray(row)) {
            for (var c = 0; c < row.length; c++) {
              bodyHtml += '<td>' + row[c] + '</td>';
            }
          }
          bodyHtml += '</tr>';
        }
      }
      document.getElementById('assetsTableBody').innerHTML = bodyHtml;
    }
  }

  function renderModel() {
    var pillars = t('model.pillars');
    var html = '';
    if (Array.isArray(pillars)) {
      for (var i = 0; i < pillars.length; i++) {
        var p = pillars[i];
        html += '<div class="pillar-card">' +
          '<div class="pillar-letter ' + p.color + '">' + p.letter + '</div>' +
          '<h3 class="pillar-name">' + p.name + '</h3>' +
          '<p class="pillar-desc">' + p.desc + '</p>' +
          '<p class="pillar-euro">' + p.euroLink + '</p>' +
          '</div>';
      }
    }
    document.getElementById('pillarsGrid').innerHTML = html;

    // Integrations
    var integrations = t('model.integrations');
    var iHtml = '';
    if (Array.isArray(integrations)) {
      for (var j = 0; j < integrations.length; j++) {
        var integ = integrations[j];
        iHtml += '<div class="integration-item">' +
          '<div class="integration-num">' + integ.num + '</div>' +
          '<div class="integration-content">' +
          '<h4>' + integ.title + '</h4>' +
          '<p>' + integ.desc + '</p>' +
          '</div>' +
          '</div>';
      }
    }
    document.getElementById('integrationsList').innerHTML = iHtml;
  }

  function renderEci() {
    var components = t('eci.components');
    var html = '';
    if (Array.isArray(components)) {
      for (var i = 0; i < components.length; i++) {
        var c = components[i];
        html += '<div class="eci-component">' +
          '<div class="eci-weight">' + c.weight + '</div>' +
          '<div class="eci-info">' +
          '<h4>' + c.name + '</h4>' +
          '<p>' + c.desc + '</p>' +
          '</div>' +
          '</div>';
      }
    }
    document.getElementById('eciComponents').innerHTML = html;

    document.getElementById('eciFormula').textContent = t('eci.formula');
  }

  function renderAiModules() {
    var modules = t('ai.modules');
    var html = '';
    if (Array.isArray(modules)) {
      for (var i = 0; i < modules.length; i++) {
        var m = modules[i];
        var inputsHtml = '';
        if (Array.isArray(m.inputs)) {
          for (var j = 0; j < m.inputs.length; j++) {
            inputsHtml += '<li>' + m.inputs[j] + '</li>';
          }
        }
        html += '<div class="ai-module-card">' +
          '<div class="ai-module-header">' +
          '<div class="ai-module-icon ' + m.color + '">' + m.icon + '</div>' +
          '<div class="ai-module-name">' + m.name + '</div>' +
          '</div>' +
          '<p class="ai-module-desc">' + m.desc + '</p>' +
          '<div class="ai-module-label">Inputs</div>' +
          '<div class="ai-module-inputs"><ul>' + inputsHtml + '</ul></div>' +
          '<div class="ai-module-label">Output</div>' +
          '<div class="ai-module-output">' + m.output + '</div>' +
          '</div>';
      }
    }
    document.getElementById('aiModulesGrid').innerHTML = html;

    // Flow
    var flow = t('ai.flow');
    var flowHtml = '';
    if (Array.isArray(flow)) {
      for (var k = 0; k < flow.length; k++) {
        flowHtml += '<div class="ai-flow-step">' + flow[k] + '</div>';
        if (k < flow.length - 1) {
          flowHtml += '<span class="ai-flow-arrow">&rarr;</span>';
        }
      }
    }
    document.getElementById('aiFlow').innerHTML = flowHtml;
  }

  function renderRoadmap() {
    // Three steps
    var threeSteps = t('roadmap.threeSteps');
    var html = '';
    if (Array.isArray(threeSteps)) {
      for (var i = 0; i < threeSteps.length; i++) {
        var s = threeSteps[i];
        html += '<div class="three-step-card">' +
          '<span class="three-step-label">' + s.step + '</span>' +
          '<h3 class="three-step-title">' + s.title + '</h3>' +
          '<p class="three-step-time">' + s.time + '</p>' +
          '<p class="three-step-desc">' + s.desc + '</p>' +
          '<div class="three-step-layer">' + s.layer + '</div>' +
          '</div>';
      }
    }
    document.getElementById('threeSteps').innerHTML = html;

    // Timeline
    var months = t('roadmap.months');
    var tHtml = '';
    if (Array.isArray(months)) {
      for (var j = 0; j < months.length; j++) {
        var m = months[j];
        tHtml += '<div class="timeline-item">' +
          '<div class="timeline-dot"></div>' +
          '<div class="timeline-month">' + m.month + '</div>' +
          '<h4 class="timeline-title">' + m.title + '</h4>' +
          '<p class="timeline-desc">' + m.desc + '</p>' +
          '</div>';
      }
    }
    document.getElementById('timeline').innerHTML = tHtml;
  }

  function renderWhitepaper() {
    var sections = t('whitepaper.sections');
    var html = '';
    if (Array.isArray(sections)) {
      for (var i = 0; i < sections.length; i++) {
        var s = sections[i];
        html += '<div class="whitepaper-section">' +
          '<div class="wp-num">' + s.num + '</div>' +
          '<div class="wp-content">' +
          '<h4>' + s.title + '</h4>' +
          '<p>' + s.desc + '</p>' +
          '</div>' +
          '</div>';
      }
    }
    document.getElementById('whitepaperGrid').innerHTML = html;
  }

  function renderWeb3Countries() {
    var headerLabels = t('web3.tableHeader');
    var countries = t('web3.countries');

    // Header
    var headerHtml = '';
    if (Array.isArray(headerLabels)) {
      for (var i = 0; i < headerLabels.length; i++) {
        headerHtml += '<th>' + headerLabels[i] + '</th>';
      }
    }
    document.getElementById('web3TableHeader').innerHTML = headerHtml;

    // Body
    var bodyHtml = '';
    if (Array.isArray(countries)) {
      for (var j = 0; j < countries.length; j++) {
        var c = countries[j];
        bodyHtml += '<tr>' +
          '<td class="web3-rank">' + c.rank + '</td>' +
          '<td class="web3-country-name"><span class="web3-flag">' + getFlagEmoji(c.flag) + '</span>' + c.name + '</td>' +
          '<td class="web3-advantage">' + c.advantage + '</td>' +
          '</tr>';
      }
    }
    document.getElementById('web3TableBody').innerHTML = bodyHtml;

    // Trend analysis
    var trendTitle = t('web3.trendTitle');
    var trendText = t('web3.trend');
    var trendHtml = '';
    if (trendTitle && trendText) {
      trendHtml = '<div class="web3-trend-box">' +
        '<h4 class="web3-trend-title">' + trendTitle + '</h4>' +
        '<p class="web3-trend-text">' + trendText + '</p>' +
        '</div>';
    }
    document.getElementById('web3Trend').innerHTML = trendHtml;

    // UK note
    document.getElementById('web3UkNote').textContent = t('web3.ukNote');
  }

  // ============================================
  // Mobile Menu
  // ============================================
  function toggleMobileMenu() {
    document.getElementById('navLinks').classList.toggle('mobile-active');
  }

  function toggleLangDropdown() {
    document.getElementById('langDropdown').classList.toggle('active');
  }

  // ============================================
  // Scroll Animations
  // ============================================
  function initScrollAnimations() {
    var observer = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add('visible');
        }
      }
    }, { threshold: 0.1 });

    var sections = document.querySelectorAll('.section');
    for (var j = 0; j < sections.length; j++) {
      sections[j].classList.add('animate-on-scroll');
      observer.observe(sections[j]);
    }
  }

  // ============================================
  // Close dropdown on outside click
  // ============================================
  function initOutsideClick() {
    document.addEventListener('click', function (e) {
      var dropdown = document.getElementById('langDropdown');
      var langBtn = document.getElementById('langBtn');
      if (dropdown && langBtn && !langBtn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });
  }

  // ============================================
  // Init
  // ============================================
  function init() {
    initTheme();
    buildLangDropdown();
    updateLangButton();
    applyTranslations();
    initScrollAnimations();
    initOutsideClick();
  }

  // Expose global functions
  window.setLanguage = setLanguage;
  window.toggleTheme = toggleTheme;
  window.toggleMobileMenu = toggleMobileMenu;
  window.toggleLangDropdown = toggleLangDropdown;

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
