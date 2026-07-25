/**
 * EACO Website - Internationalization (i18n)
 * 10 Languages: EN, ZH, ES, FR, AR, RU, DE, IT, NL, PL
 */

const translations = {
  // ============================================================
  // ENGLISH (Default)
  // ============================================================
  en: {
    _meta: { name: "English", flag: "EN", dir: "ltr" },
    nav: {
      home: "Home",
      price: "Price Targets",
      gdp: "Europe GDP",
      assets: "Liquid Assets",
      model: "Civilization Model",
      eci: "ECI Index",
      ai: "AI Modules",
      roadmap: "Roadmap",
      whitepaper: "Whitepaper",
      web3: "Web3 Countries"
    },
    hero: {
      title: "Earth's Best Coin",
      subtitle: "AI + RWA + Web3 Civilization Model",
      tagline: "Energy x Attitude x Cooperation x Optimization",
      cta: "Explore EACO",
      contract: "Contract Address",
      website: "Official Website"
    },
    price: {
      title: "EACO Price Targets",
      subtitle: "Step-by-step value milestones from penny to premium",
      stages: [
        { name: "1 Penny Pound", value: "£0.01", desc: "Community building phase - establishing grassroots adoption and awareness" },
        { name: "1 Dime Pound", value: "£0.10", desc: "Utility phase - EACO integrated into real-world asset ecosystems" },
        { name: "1 Pound", value: "£1.00", desc: "Recognition phase - EACO becomes a recognized digital civilization unit" },
        { name: "10-20 Pounds", value: "£10-20", desc: "Institutional phase - institutional adoption and ECI index integration" },
        { name: "100-200 Pounds", value: "£100-200", desc: "Global reserve phase - EACO as a global civilization asset standard" }
      ],
      howToAchieve: "How to Achieve This Step by Step",
      steps: [
        { phase: "Phase 1", title: "Foundation & Community", time: "Months 1-6", desc: "Build global community, establish multi-language presence, launch EACO website app, and create initial liquidity pools on Solana DEX." },
        { phase: "Phase 2", title: "Utility & RWA Integration", time: "Months 7-12", desc: "Connect European asset data feeds, build ECI index prototype, launch AI modules for data analysis, establish partnerships with European ESG platforms." },
        { phase: "Phase 3", title: "Institutional Adoption", time: "Year 2", desc: "Integrate with MiCA-compliant frameworks, launch institutional-grade RWA products, achieve exchange listings on tier-1 platforms." },
        { phase: "Phase 4", title: "Global Reserve Asset", time: "Year 3+", desc: "Full EACO civilization model deployment, global ECI index adoption, EACO recognized as earth's best AI+RWA+Web3 coin." }
      ]
    },
    gdp: {
      title: "Europe Top 10 GDP Countries",
      subtitle: "IMF 2026 Forecast - EACO Target Markets",
      source: "Source: IMF World Economic Outlook 2026 Forecast",
      tableHeader: ["Rank", "Country", "2026 GDP (Forecast)", "Market Priority"],
      countries: [
        { rank: 1, flag: "DE", name: "Germany", gdp: "$5.45T", priority: "Tier 1" },
        { rank: 2, flag: "GB", name: "United Kingdom", gdp: "$4.26T", priority: "Tier 1 - Home Market" },
        { rank: 3, flag: "FR", name: "France", gdp: "$3.60T", priority: "Tier 1" },
        { rank: 4, flag: "IT", name: "Italy", gdp: "$2.74T", priority: "Tier 2" },
        { rank: 5, flag: "RU", name: "Russia", gdp: "$2.66T", priority: "Tier 2" },
        { rank: 6, flag: "ES", name: "Spain", gdp: "$2.09T", priority: "Tier 2" },
        { rank: 7, flag: "NL", name: "Netherlands", gdp: "$1.45T", priority: "Tier 3" },
        { rank: 8, flag: "CH", name: "Switzerland", gdp: "$1.15T", priority: "Tier 3" },
        { rank: 9, flag: "PL", name: "Poland", gdp: "$1.13T", priority: "Tier 3" },
        { rank: 10, flag: "IE", name: "Ireland", gdp: "$779.4B", priority: "Tier 3" }
      ],
      insight: "Top 3 economies (Germany, UK, France) combine for over $13 trillion GDP. EACO targets these markets first for maximum impact."
    },
    assets: {
      title: "UK & Europe's 30 Strongest Liquid Asset Classes",
      subtitle: "By category - not individual investment advice",
      categories: [
        {
          icon: "B",
          name: "Currency & Cash Equivalents",
          liquidity: "Very High",
          color: "blue",
          items: ["GBP Cash", "EUR Cash", "UK Gilts / EU T-Bills", "Money Market Funds", "Bank Deposits"]
        },
        {
          icon: "S",
          name: "Equities",
          liquidity: "Very High",
          color: "green",
          items: ["UK FTSE 100", "EU STOXX 50", "UK FTSE 250", "German DAX", "French CAC 40"]
        },
        {
          icon: "B",
          name: "Bonds",
          liquidity: "High",
          color: "purple",
          items: ["UK Gilts (Long-term)", "German Bunds", "French OAT", "EU Investment Grade Corporate", "EU High Yield"]
        },
        {
          icon: "R",
          name: "Real Estate",
          liquidity: "Medium-High",
          color: "orange",
          items: ["UK REITs", "European REITs", "Commercial Property Funds", "Infrastructure Funds"]
        },
        {
          icon: "C",
          name: "Commodities",
          liquidity: "High",
          color: "amber",
          items: ["Brent Crude Oil", "European Natural Gas", "Gold", "Silver", "EU Carbon ETS"]
        },
        {
          icon: "D",
          name: "Digital Assets",
          liquidity: "High",
          color: "cyan",
          items: ["EACO + SOL", "Bitcoin", "Ethereum", "EUR Stablecoins", "EU Compliant Digital Bonds"]
        }
      ],
      tableTitle: "Summary: 30 Strongest Liquid Asset Classes",
      table: {
        headers: ["Category", "Liquidity", "Examples"],
        rows: [
          ["Currency", "Very High", "GBP, EUR, Money Market Funds"],
          ["Equities", "Very High", "FTSE 100, DAX, STOXX 50"],
          ["Bonds", "High", "Bunds, Gilts, OAT"],
          ["Real Estate", "Medium-High", "REITs, Infrastructure Funds"],
          ["Commodities", "High", "Brent, Natural Gas, Gold"],
          ["Digital Assets", "High", "EACO + SOL, BTC, ETH, Stablecoins"]
        ]
      }
    },
    model: {
      title: "EACO Civilization Model",
      subtitle: "Energy x Attitude x Cooperation x Optimization",
      intro: "EACO's four core pillars, integrated with European asset systems to form a complementary civilization model.",
      pillars: [
        {
          letter: "E",
          name: "Energy",
          desc: "Powering the civilization with sustainable energy data",
          euroLink: "EU Carbon Trading (EU ETS), European Green Fund data, Energy transition indicators form EACO's Energy module",
          color: "green"
        },
        {
          letter: "A",
          name: "Attitude",
          desc: "The mindset of building earth's best civilization",
          euroLink: "European innovation spirit, ESG leadership mindset, sustainability-first approach",
          color: "blue"
        },
        {
          letter: "C",
          name: "Cooperation",
          desc: "Cross-border collaboration mechanisms",
          euroLink: "EU transnational cooperation framework, European regulatory standards, ESG benchmarks",
          color: "purple"
        },
        {
          letter: "O",
          name: "Optimization",
          desc: "Continuous improvement through AI and data",
          euroLink: "EU AI Act compliance, MiCA digital asset standards, world's safest AI + Web3 model",
          color: "orange"
        }
      ],
      integrationTitle: "5 Core Integration Pathways",
      integrations: [
        { num: 1, title: "European Assets as RWA Anchors", desc: "European assets serve as real-world asset data sources, value anchoring models, AI training sets, and economic indicator inputs for EACO." },
        { num: 2, title: "Cooperation via EU Frameworks", desc: "EACO adopts EU transnational cooperation mechanisms, regulatory frameworks, ESG standards, and carbon market systems." },
        { num: 3, title: "ESG + Energy Module", desc: "Integrate EU ETS, European green fund data, and energy transition indicators to strengthen EACO's Energy module." },
        { num: 4, title: "AI + Digital Asset Compliance", desc: "Leverage EU AI Act and MiCA frameworks to build the world's most compliant AI + Web3 model." },
        { num: 5, title: "Civilization Index Inputs", desc: "European stock indices, bond yields, energy prices, carbon prices, AI innovation index, and digital asset liquidity feed into ECI." }
      ]
    },
    eci: {
      title: "Earth Civilization Index (ECI)",
      subtitle: "The Web3 version of Earth's civilization index",
      intro: "ECI is a composite index built from European asset categories, serving as EACO's civilization value layer.",
      components: [
        { name: "European Stock Indices", weight: "20%", desc: "FTSE 100, DAX, CAC 40, STOXX 50 performance data" },
        { name: "European Bond Yields", weight: "20%", desc: "UK Gilts, German Bunds, French OAT yield curves" },
        { name: "European Energy Prices", weight: "15%", desc: "Brent crude, natural gas, electricity prices" },
        { name: "EU Carbon Prices", weight: "15%", desc: "EU ETS carbon allowance prices" },
        { name: "European AI Innovation Index", weight: "15%", desc: "AI patents, R&D investment, startup activity" },
        { name: "European Digital Asset Liquidity", weight: "15%", desc: "BTC, ETH, EACO trading volumes and liquidity" }
      ],
      formula: "ECI = 0.20 x StockIndex + 0.20 x BondYield + 0.15 x Energy + 0.15 x Carbon + 0.15 x AIIndex + 0.15 x DigitalLiquidity"
    },
    ai: {
      title: "EACO AI Module Architecture",
      subtitle: "Four AI modules aligned with the E-A-C-O civilization model",
      modules: [
        {
          name: "AI-Energy Module",
          icon: "E",
          desc: "Real-time energy data processing, ESG scoring, carbon footprint tracking",
          inputs: ["EU ETS price feeds", "Brent/Gas prices", "Green energy data"],
          output: "Earth Economic Temperature Score",
          color: "green"
        },
        {
          name: "AI-Attitude Module",
          icon: "A",
          desc: "Sentiment analysis, market attitude tracking, community health metrics",
          inputs: ["Social media sentiment", "News analysis", "Community engagement"],
          output: "Civilization Attitude Index",
          color: "blue"
        },
        {
          name: "AI-Cooperation Module",
          icon: "C",
          desc: "Cross-border collaboration monitoring, regulatory compliance tracking",
          inputs: ["EU regulatory feeds", "Cross-border trade data", "ESG compliance scores"],
          output: "Cooperation Health Score",
          color: "purple"
        },
        {
          name: "AI-Optimization Module",
          icon: "O",
          desc: "Continuous model optimization, risk management, predictive analytics",
          inputs: ["MiCA compliance data", "AI Act alignment", "Market risk indicators"],
          output: "Optimization Recommendations",
          color: "orange"
        }
      ],
      flowTitle: "AI Data Flow Architecture",
      flow: ["Data Ingestion", "Preprocessing & Validation", "AI Model Training", "Civilization Index Computation", "On-chain Value Mapping", "EACO Token Value Reflection"]
    },
    roadmap: {
      title: "EACO Development Roadmap",
      subtitle: "From data integration to global civilization asset",
      threeStepTitle: "3-Step Strategic Roadmap",
      threeSteps: [
        {
          step: "Step 1",
          title: "Data Integration",
          time: "Easiest - Immediate",
          desc: "Connect European stock indices, bond yields, carbon prices, and energy prices to form EACO's Civilization Data Layer.",
          layer: "Civilization Data Layer"
        },
        {
          step: "Step 2",
          title: "AI Model Training",
          time: "Medium-term",
          desc: "Train Energy module with ESG data, Cooperation module with EU frameworks, Optimization module with regulatory systems to form EACO's Civilization AI Layer.",
          layer: "Civilization AI Layer"
        },
        {
          step: "Step 3",
          title: "Web3 Value Mapping",
          time: "Long-term",
          desc: "Map European asset categories to EACO's civilization value index, forming Earth E (EACO) global civilization anchoring model.",
          layer: "Global Civilization Asset Layer"
        }
      ],
      twelveMonthTitle: "12-Month Development Roadmap",
      months: [
        { month: "M1-M2", title: "Website & Community Launch", desc: "Launch multi-language website, establish global community channels, initial DEX liquidity on Solana" },
        { month: "M3-M4", title: "Data Feed Integration", desc: "Integrate European stock/bond/energy/carbon price APIs, build ECI data pipeline" },
        { month: "M5-M6", title: "ECI Index Prototype", desc: "Launch ECI index prototype, publish whitepaper v1.0, begin AI module development" },
        { month: "M7-M8", title: "AI Module Beta", desc: "Deploy AI-Energy and AI-Cooperation modules, partner with ESG data providers" },
        { month: "M9-M10", title: "RWA Product Launch", desc: "Launch RWA-backed products, MiCA compliance preparation, exchange listing applications" },
        { month: "M11-M12", title: "Full Ecosystem", desc: "Full AI module deployment, ECI index live, institutional partnerships, global expansion" }
      ]
    },
    whitepaper: {
      title: "EACO Whitepaper Structure",
      subtitle: "Complete whitepaper framework for EACO x European Assets",
      sections: [
        { num: "1", title: "Executive Summary", desc: "EACO vision, mission, and value proposition as Earth's Best Coin" },
        { num: "2", title: "EACO Civilization Model", desc: "Energy x Attitude x Cooperation x Optimization framework detailed" },
        { num: "3", title: "European Asset Landscape", desc: "Top 10 GDP countries, 30 liquid asset classes, market analysis" },
        { num: "4", title: "ECI Earth Civilization Index", desc: "Index construction, weighting methodology, data sources" },
        { num: "5", title: "AI Module Design", desc: "Four AI modules architecture, training methodology, deployment plan" },
        { num: "6", title: "RWA Integration Framework", desc: "Real-world asset tokenization, European asset anchoring, compliance" },
        { num: "7", title: "Web3 Architecture", desc: "Solana blockchain, smart contracts, tokenomics, governance" },
        { num: "8", title: "Regulatory Compliance", desc: "MiCA alignment, EU AI Act compliance, cross-border legal framework" },
        { num: "9", title: "Roadmap & Milestones", desc: "3-step strategic roadmap, 12-month development plan, long-term vision" },
        { num: "10", title: "Tokenomics & Price Targets", desc: "Token distribution, utility model, price milestone strategy" },
        { num: "11", title: "Risk Analysis", desc: "Market risks, regulatory risks, technical risks, mitigation strategies" },
        { num: "12", title: "Conclusion & Vision", desc: "EACO as earth's best AI + RWA + Web3 civilization coin" }
      ]
    },
    web3: {
      title: "Europe Top 10 Web3-Friendly Countries",
      subtitle: "EACO Europe Group - Key markets for Web3 and crypto adoption",
      tableHeader: ["Rank", "Country", "Key Advantages & Evidence"],
      countries: [
        { rank: 1, flag: "DE", name: "Germany", advantage: "Compliance hub and financial infrastructure leader. Holds the most MiCA licenses in the EU (57), nearly a quarter of the EU total. Integrated crypto into established financial regulatory frameworks well before MiCA, providing a clear path for regulated crypto businesses." },
        { rank: 2, flag: "CH", name: "Switzerland", advantage: "\"Crypto Valley\" and innovation hub. The Zug-based Crypto Valley is one of the world's earliest blockchain industry clusters. Clear and supportive regulatory framework, attracting over 900 registered crypto companies." },
        { rank: 3, flag: "FR", name: "France", advantage: "Government strategic push. Received 26 MiCA licenses, ranking second in the EU. The government designated blockchain as a key development area through the \"France 2030\" investment plan, actively driving Web3 industry implementation." },
        { rank: 4, flag: "LU", name: "Luxembourg", advantage: "Institutional-grade financial center. Stable financial system (AAA rating), with a massive fund ecosystem (approximately EUR 8.29 trillion AUM). Coinbase and other giants chose it as their European MiCA operations center. Its mature fund toolbox makes it the preferred location for institutional crypto funds." },
        { rank: 5, flag: "MT", name: "Malta", advantage: "\"Blockchain Island.\" Passed blockchain legislation as early as 2018, one of Europe's first countries to provide a comprehensive legal framework for crypto businesses. Its domestic VFA framework aligns closely with MiCA, making it an ideal \"sandbox\" for exchanges transitioning to MiCA compliance." },
        { rank: 6, flag: "EE", name: "Estonia", advantage: "Digital government pioneer. Unique e-Residency program and mature digital identity system. Although regulations have tightened recently (to strengthen AML), the overall framework remains attractive to crypto businesses." },
        { rank: 7, flag: "NL", name: "Netherlands", advantage: "Open tech and innovation atmosphere. Amsterdam has become an important node for DeFi and DePIN. Its open business climate has attracted a large number of Web3 startups." },
        { rank: 8, flag: "IT", name: "Italy", advantage: "High market activity. Scores well in various global crypto-friendliness rankings, with outstanding crypto payment acceptance metrics. Already has over 73 registered crypto service providers." },
        { rank: 9, flag: "PT", name: "Portugal", advantage: "Tax advantages (subject to new policies). Previously a \"digital nomad paradise\" with tax-free personal crypto capital gains, though this advantage is diminishing due to upcoming tax policies. Currently in a transitional phase, still followed by some practitioners." },
        { rank: 10, flag: "IE", name: "Ireland", advantage: "Financial asset hub. Together with Germany, France, Netherlands, and Luxembourg, concentrates about 72% of EU financial assets. As a traditional international financial center, it is becoming an important gateway for crypto businesses entering Europe." }
      ],
      trendTitle: "Key Trend Analysis",
      trend: "The biggest variable in European Web3 development is the full implementation of MiCA (Markets in Crypto-Assets Regulation). Once fully enforced in 2026, compliance capability becomes the key competitive factor. Germany, France, Luxembourg, and others with strong financial strength and clear regulatory paths are emerging as the main winners under this new regulation.",
      ukNote: "The United Kingdom did not make the top ten in this ranking. Although London has an active crypto community, its overall regulatory clarity and business friendliness scores are lower than the countries listed above. - EACO Europe Group"
    },

    footer: {
      disclaimer: "EACO is an AI + RWA + Web3 civilization model project. This is not financial advice. All price targets are aspirational milestones.",
      rights: "All rights reserved.",
      links: "Quick Links",
      community: "Community"
    }
  },

  // ============================================================
  // CHINESE
  // ============================================================
  zh: {
    _meta: { name: "中文", flag: "ZH", dir: "ltr" },
    nav: {
      home: "首页",
      price: "价格目标",
      gdp: "欧洲GDP",
      assets: "流动性资产",
      model: "文明模型",
      eci: "ECI指数",
      ai: "AI模块",
      roadmap: "路线图",
      whitepaper: "白皮书",
      web3: "Web3国家"
    },
    hero: {
      title: "地球最佳代币",
      subtitle: "AI + RWA + Web3 文明模型",
      tagline: "能源 x 态度 x 合作 x 优化",
      cta: "探索EACO",
      contract: "合约地址",
      website: "官方网站"
    },
    price: {
      title: "EACO 价格目标",
      subtitle: "从便士到高端的渐进价值里程碑",
      stages: [
        { name: "1便士英镑", value: "£0.01", desc: "社区建设阶段 - 建立草根采用和认知" },
        { name: "1角英镑", value: "£0.10", desc: "实用阶段 - EACO整合到现实世界资产生态系统" },
        { name: "1英镑", value: "£1.00", desc: "认知阶段 - EACO成为公认的数字文明单位" },
        { name: "10-20英镑", value: "£10-20", desc: "机构阶段 - 机构采用和ECI指数整合" },
        { name: "100-200英镑", value: "£100-200", desc: "全球储备阶段 - EACO成为全球文明资产标准" }
      ],
      howToAchieve: "如何逐步实现",
      steps: [
        { phase: "第一阶段", title: "基础与社区", time: "1-6个月", desc: "建设全球社区，建立多语言展示，启动EACO网站应用，在Solana DEX创建初始流动性池。" },
        { phase: "第二阶段", title: "实用性与RWA整合", time: "7-12个月", desc: "连接欧洲资产数据源，构建ECI指数原型，启动数据分析AI模块，与欧洲ESG平台建立合作。" },
        { phase: "第三阶段", title: "机构采用", time: "第2年", desc: "整合MiCA合规框架，推出机构级RWA产品，在一线交易平台上市。" },
        { phase: "第四阶段", title: "全球储备资产", time: "第3年+", desc: "完整部署EACO文明模型，全球ECI指数采用，EACO被公认为地球最佳AI+RWA+Web3代币。" }
      ]
    },
    gdp: {
      title: "欧洲前10大GDP国家",
      subtitle: "IMF 2026年预测 - EACO目标市场",
      source: "来源：IMF世界经济展望2026年预测",
      tableHeader: ["排名", "国家", "2026年GDP（预测）", "市场优先级"],
      countries: [
        { rank: 1, flag: "DE", name: "德国", gdp: "$5.45万亿", priority: "第一梯队" },
        { rank: 2, flag: "GB", name: "英国", gdp: "$4.26万亿", priority: "第一梯队 - 本土市场" },
        { rank: 3, flag: "FR", name: "法国", gdp: "$3.60万亿", priority: "第一梯队" },
        { rank: 4, flag: "IT", name: "意大利", gdp: "$2.74万亿", priority: "第二梯队" },
        { rank: 5, flag: "RU", name: "俄罗斯", gdp: "$2.66万亿", priority: "第二梯队" },
        { rank: 6, flag: "ES", name: "西班牙", gdp: "$2.09万亿", priority: "第二梯队" },
        { rank: 7, flag: "NL", name: "荷兰", gdp: "$1.45万亿", priority: "第三梯队" },
        { rank: 8, flag: "CH", name: "瑞士", gdp: "$1.15万亿", priority: "第三梯队" },
        { rank: 9, flag: "PL", name: "波兰", gdp: "$1.13万亿", priority: "第三梯队" },
        { rank: 10, flag: "IE", name: "爱尔兰", gdp: "$7794亿", priority: "第三梯队" }
      ],
      insight: "前三强（德国、英国、法国）GDP总和超过13万亿美元。EACO优先瞄准这些市场以实现最大影响力。"
    },
    assets: {
      title: "英国及欧洲最强的30类流动性资产",
      subtitle: "按类别分类 - 不涉及具体投资建议",
      categories: [
        {
          icon: "B",
          name: "货币与现金等价物",
          liquidity: "极高",
          color: "blue",
          items: ["英镑现金", "欧元现金", "英国国债/欧盟短期国库券", "货币市场基金", "银行存款"]
        },
        {
          icon: "S",
          name: "股票",
          liquidity: "极高",
          color: "green",
          items: ["英国FTSE 100", "欧盟STOXX 50", "英国FTSE 250", "德国DAX", "法国CAC 40"]
        },
        {
          icon: "B",
          name: "债券",
          liquidity: "高",
          color: "purple",
          items: ["英国长期国债", "德国国债", "法国国债", "欧洲投资级企业债", "欧洲高收益债"]
        },
        {
          icon: "R",
          name: "房地产",
          liquidity: "中高",
          color: "orange",
          items: ["英国REITs", "欧洲REITs", "商业地产基金", "基础设施基金"]
        },
        {
          icon: "C",
          name: "大宗商品",
          liquidity: "高",
          color: "amber",
          items: ["北海布伦特原油", "欧洲天然气", "黄金", "白银", "欧盟碳排放ETS"]
        },
        {
          icon: "D",
          name: "数字资产",
          liquidity: "高",
          color: "cyan",
          items: ["EACO + SOL", "比特币", "以太坊", "欧元稳定币", "欧洲合规数字债券"]
        }
      ],
      tableTitle: "总结：最强的30类流动性资产",
      table: {
        headers: ["类别", "流动性强度", "示例"],
        rows: [
          ["货币", "极高", "英镑、欧元、货币基金"],
          ["股票", "极高", "FTSE100、DAX、STOXX50"],
          ["债券", "高", "Bunds、Gilts、OAT"],
          ["房地产", "中高", "REITs、基础设施基金"],
          ["大宗商品", "高", "布伦特、天然气、黄金"],
          ["数字资产", "高", "EACO+SOL、BTC、ETH、稳定币"]
        ]
      }
    },
    model: {
      title: "EACO文明模型",
      subtitle: "能源 x 态度 x 合作 x 优化",
      intro: "EACO的四大核心支柱，与欧洲资产体系整合，形成互补的文明模型。",
      pillars: [
        { letter: "E", name: "能源", desc: "以可持续能源数据驱动文明", euroLink: "欧盟碳交易市场(EU ETS)、欧洲绿色基金数据、能源转型指标构成EACO的能源模块", color: "green" },
        { letter: "A", name: "态度", desc: "建设地球最佳文明的心态", euroLink: "欧洲创新精神、ESG领导心态、可持续发展优先理念", color: "blue" },
        { letter: "C", name: "合作", desc: "跨国协作机制", euroLink: "欧盟跨国协作框架、欧洲监管标准、ESG基准", color: "purple" },
        { letter: "O", name: "优化", desc: "通过AI和数据持续改进", euroLink: "欧盟AI法案合规、MiCA数字资产标准、全球最安全的AI+Web3模型", color: "orange" }
      ],
      integrationTitle: "5大核心整合路径",
      integrations: [
        { num: 1, title: "欧洲资产作为RWA锚点", desc: "欧洲资产作为现实世界资产数据源、价值锚定模型、AI训练集和经济指标输入。" },
        { num: 2, title: "通过欧盟框架合作", desc: "EACO采用欧盟跨国合作机制、监管框架、ESG标准和碳市场体系。" },
        { num: 3, title: "ESG + 能源模块", desc: "整合EU ETS、欧洲绿色基金数据和能源转型指标，强化EACO的能源模块。" },
        { num: 4, title: "AI + 数字资产合规", desc: "利用欧盟AI法案和MiCA框架，构建全球最合规的AI+Web3模型。" },
        { num: 5, title: "文明指数输入", desc: "欧洲股票指数、债券收益率、能源价格、碳价格、AI创新指数和数字资产流动性汇入ECI。" }
      ]
    },
    eci: {
      title: "地球文明指数（ECI）",
      subtitle: "地球文明指数的Web3版本",
      intro: "ECI是由欧洲资产类别构建的综合指数，作为EACO的文明价值层。",
      components: [
        { name: "欧洲股票指数", weight: "20%", desc: "FTSE 100、DAX、CAC 40、STOXX 50表现数据" },
        { name: "欧洲债券收益率", weight: "20%", desc: "英国国债、德国国债、法国国债收益率曲线" },
        { name: "欧洲能源价格", weight: "15%", desc: "布伦特原油、天然气、电力价格" },
        { name: "欧盟碳价格", weight: "15%", desc: "EU ETS碳配额价格" },
        { name: "欧洲AI创新指数", weight: "15%", desc: "AI专利、研发投资、创业活动" },
        { name: "欧洲数字资产流动性", weight: "15%", desc: "BTC、ETH、EACO交易量和流动性" }
      ],
      formula: "ECI = 0.20 x 股票指数 + 0.20 x 债券收益率 + 0.15 x 能源 + 0.15 x 碳 + 0.15 x AI指数 + 0.15 x 数字流动性"
    },
    ai: {
      title: "EACO AI模块架构",
      subtitle: "与E-A-C-O文明模型对齐的四大AI模块",
      modules: [
        { name: "AI-能源模块", icon: "E", desc: "实时能源数据处理、ESG评分、碳足迹追踪", inputs: ["EU ETS价格源", "布伦特/天然气价格", "绿色能源数据"], output: "地球经济温度评分", color: "green" },
        { name: "AI-态度模块", icon: "A", desc: "情感分析、市场态度追踪、社区健康指标", inputs: ["社交媒体情感", "新闻分析", "社区参与度"], output: "文明态度指数", color: "blue" },
        { name: "AI-合作模块", icon: "C", desc: "跨国合作监控、监管合规追踪", inputs: ["欧盟监管源", "跨国贸易数据", "ESG合规评分"], output: "合作健康评分", color: "purple" },
        { name: "AI-优化模块", icon: "O", desc: "持续模型优化、风险管理、预测分析", inputs: ["MiCA合规数据", "AI法案对齐", "市场风险指标"], output: "优化建议", color: "orange" }
      ],
      flowTitle: "AI数据流架构",
      flow: ["数据采集", "预处理与验证", "AI模型训练", "文明指数计算", "链上价值映射", "EACO代币价值反映"]
    },
    roadmap: {
      title: "EACO发展路线图",
      subtitle: "从数据整合到全球文明资产",
      threeStepTitle: "三步战略路线图",
      threeSteps: [
        { step: "第一步", title: "数据接入", time: "最容易 - 立即", desc: "接入欧洲股票指数、债券收益率、碳价格和能源价格，形成EACO的文明数据层。", layer: "文明数据层" },
        { step: "第二步", title: "AI模型训练", time: "中期", desc: "用ESG数据训练能源模块，用欧盟框架训练合作模块，用监管体系训练优化模块，形成EACO的文明AI层。", layer: "文明AI层" },
        { step: "第三步", title: "Web3价值映射", time: "长期", desc: "将欧洲资产类别映射为EACO的文明价值指数，形成Earth E (EACO)全球文明锚定模型。", layer: "全球文明资产层" }
      ],
      twelveMonthTitle: "12个月发展路线图",
      months: [
        { month: "M1-M2", title: "网站与社区启动", desc: "启动多语言网站，建立全球社区渠道，在Solana上初始DEX流动性" },
        { month: "M3-M4", title: "数据源整合", desc: "整合欧洲股票/债券/能源/碳价格API，构建ECI数据管道" },
        { month: "M5-M6", title: "ECI指数原型", desc: "启动ECI指数原型，发布白皮书v1.0，开始AI模块开发" },
        { month: "M7-M8", title: "AI模块测试版", desc: "部署AI-能源和AI-合作模块，与ESG数据提供商合作" },
        { month: "M9-M10", title: "RWA产品发布", desc: "推出RWA支撑产品，MiCA合规准备，交易所上市申请" },
        { month: "M11-M12", title: "完整生态系统", desc: "全面部署AI模块，ECI指数上线，机构合作，全球扩展" }
      ]
    },
    whitepaper: {
      title: "EACO白皮书结构",
      subtitle: "EACO x 欧洲资产完整白皮书框架",
      sections: [
        { num: "1", title: "执行摘要", desc: "EACO愿景、使命和作为地球最佳代币的价值主张" },
        { num: "2", title: "EACO文明模型", desc: "能源 x 态度 x 合作 x 优化框架详解" },
        { num: "3", title: "欧洲资产格局", desc: "前10大GDP国家、30类流动性资产、市场分析" },
        { num: "4", title: "ECI地球文明指数", desc: "指数构建、权重方法论、数据来源" },
        { num: "5", title: "AI模块设计", desc: "四大AI模块架构、训练方法论、部署计划" },
        { num: "6", title: "RWA整合框架", desc: "现实世界资产代币化、欧洲资产锚定、合规" },
        { num: "7", title: "Web3架构", desc: "Solana区块链、智能合约、代币经济学、治理" },
        { num: "8", title: "监管合规", desc: "MiCA对齐、欧盟AI法案合规、跨国法律框架" },
        { num: "9", title: "路线图与里程碑", desc: "三步战略路线图、12个月发展计划、长期愿景" },
        { num: "10", title: "代币经济学与价格目标", desc: "代币分配、实用模型、价格里程碑策略" },
        { num: "11", title: "风险分析", desc: "市场风险、监管风险、技术风险、缓解策略" },
        { num: "12", title: "结论与愿景", desc: "EACO作为地球最佳AI+RWA+Web3文明代币" }
      ]
    },
    web3: {
      title: "欧洲Web3友好国家TOP 10",
      subtitle: "EACO欧洲小组 - Web3与加密货币采用的核心市场",
      tableHeader: ["排名", "国家", "核心优势与依据"],
      countries: [
        { rank: 1, flag: "DE", name: "德国", advantage: "合规中心与金融基础设施优势。拥有欧洲最多的MiCA牌照（57张），占欧盟总数近四分之一。早在MiCA之前就已将加密业务纳入成熟的金融监管框架，为受监管的加密企业提供了清晰路径。" },
        { rank: 2, flag: "CH", name: "瑞士", advantage: "“加密谷”与创新析纽。以楚格州为中心的“加密谷”是全球最早的区块链产业集群之一。监管框架明确且支持，吸引了超过900家注册加密企业。" },
        { rank: 3, flag: "FR", name: "法国", advantage: "政府战略推动。获得26张MiCA牌照，位居欧盟第二。政府通过“法国2030”投资计划将区块链列为重点发展领域，积极推动Web3产业落地。" },
        { rank: 4, flag: "LU", name: "卢森堡", advantage: "机构级金融中心。金融体系稳定（AAA评级），拥有庞大的基金生态系统（约8.29万亿欧元资产管理规模）。Coinbase等巨头将其设为欧洲MiCA业务中心。凭借成熟的基金工具箱，使其成为机构级加密基金的首选地。" },
        { rank: 5, flag: "MT", name: "马耳他", advantage: "“区块链岛”。早在2018年就通过了区块链立法，是欧洲最早为加密业务提供全面法律框架的国家之一。其本土VFA框架与MiCA高度契合，是交易所向MiCA合规过渡的理想“沙盒”。" },
        { rank: 6, flag: "EE", name: "爱沙尼亚", advantage: "数字政府先锋。拥有独特的“电子居民”计划和成熟的数字身份体系。尽管近年来监管趋严（以加强反洗钱），但整体框架对加密企业仍具吸引力。" },
        { rank: 7, flag: "NL", name: "荷兰", advantage: "技术与创新氛围开放。阿姆斯特丹已成为DeFi（去中心化金融）和DePIN（去中心化物理基础设施网络）的重要节点。其开放的商业氛围吸引了大量Web3初创企业。" },
        { rank: 8, flag: "IT", name: "意大利", advantage: "市场活跃度高。在各类全球加密友好度排名中得分较高，加密货币支付接受度指标表现突出，已有超过73家注册加密服务提供商。" },
        { rank: 9, flag: "PT", name: "葡萄牙", advantage: "税收优势（受新政策影响）。曾以其对个人加密货币资本利得免税的政策成为“数字游民天堂”，但此优势正因即将实施的征税政策而减弱，目前处于过渡阶段，仍受部分从业者关注。" },
        { rank: 10, flag: "IE", name: "爱尔兰", advantage: "金融资产集中地。与德国、法国、荷兰、卢森堡共同集中了欧盟约72%的金融资产。作为传统的国际金融中心，正在成为加密企业布局欧洲的重要门户。" }
      ],
      trendTitle: "核心趋势分析",
      trend: "目前欧洲Web3发展的最大变量是MiCA（加密资产市场法规）的全面实施。该法规于2026年全面执行后，合规能力成为竞争关键。德国、法国、卢森堡等国凭借雄厚的金融实力和清晰的监管路径，正成为这一新规下的主要赢家。",
      ukNote: "英国在本次排名中未进入前十。尽管伦敦拥有活跃的加密社区，但根据现有评估，其综合监管清晰度和商业友好度评分低于上述国家。 — EACO欧洲小组"
    },

    footer: {
      disclaimer: "EACO是一个AI+RWA+Web3文明模型项目。本内容不构成投资建议。所有价格目标均为愿景里程碑。",
      rights: "保留所有权利。",
      links: "快速链接",
      community: "社区"
    }
  },

  // ============================================================
  // SPANISH
  // ============================================================
  es: {
    _meta: { name: "Espanol", flag: "ES", dir: "ltr" },
    nav: {
      home: "Inicio",
      price: "Objetivos de Precio",
      gdp: "PIB Europa",
      assets: "Activos Liquidos",
      model: "Modelo de Civilizacion",
      eci: "Indice ECI",
      ai: "Modulos IA",
      roadmap: "Hoja de Ruta",
      whitepaper: "Libro Blanco",
      web3: "Paises Web3"
    },
    hero: {
      title: "Earth's Best Coin",
      subtitle: "Modelo de Civilizacion IA + RWA + Web3",
      tagline: "Energia x Actitud x Cooperacion x Optimizacion",
      cta: "Explorar EACO",
      contract: "Direccion del Contrato",
      website: "Sitio Web Oficial"
    },
    price: {
      title: "Objetivos de Precio de EACO",
      subtitle: "Hitos de valor paso a paso, de penique a premium",
      stages: [
        { name: "1 Penique Libra", value: "L0.01", desc: "Fase de construccion de comunidad - estableciendo adopcion y conciencia" },
        { name: "1 Dime Libra", value: "L0.10", desc: "Fase de utilidad - EACO integrado en ecosistemas de activos del mundo real" },
        { name: "1 Libra", value: "L1.00", desc: "Fase de reconocimiento - EACO se convierte en una unidad de civilizacion digital reconocida" },
        { name: "10-20 Libras", value: "L10-20", desc: "Fase institucional - adopcion institucional e integracion del indice ECI" },
        { name: "100-200 Libras", value: "L100-200", desc: "Fase de reserva global - EACO como estandar de activo de civilizacion global" }
      ],
      howToAchieve: "Como Lograr Esto Paso a Paso",
      steps: [
        { phase: "Fase 1", title: "Fundacion y Comunidad", time: "Meses 1-6", desc: "Construir comunidad global, establecer presencia multilingue, lanzar aplicacion web EACO y crear pools de liquidez iniciales en Solana DEX." },
        { phase: "Fase 2", title: "Utilidad e Integracion RWA", time: "Meses 7-12", desc: "Conectar fuentes de datos de activos europeos, construir prototipo de indice ECI, lanzar modulos de IA para analisis de datos, establecer alianzas con plataformas ESG europeas." },
        { phase: "Fase 3", title: "Adopcion Institucional", time: "Ano 2", desc: "Integrar con marcos cumplidores con MiCA, lanzar productos RWA de grado institucional, lograr cotizacion en plataformas de nivel 1." },
        { phase: "Fase 4", title: "Activo de Reserva Global", time: "Ano 3+", desc: "Despliegue completo del modelo de civilizacion EACO, adopcion global del indice ECI, EACO reconocido como la mejor moneda AI+RWA+Web3 de la tierra." }
      ]
    },
    gdp: {
      title: "Top 10 Paises por PIB en Europa",
      subtitle: "Pronostico FMI 2026 - Mercados Objetivo de EACO",
      source: "Fuente: FMI Perspectivas Economicas Mundiales 2026",
      tableHeader: ["Rango", "Pais", "PIB 2026 (Pronostico)", "Prioridad de Mercado"],
      countries: [
        { rank: 1, flag: "DE", name: "Alemania", gdp: "$5.45T", priority: "Nivel 1" },
        { rank: 2, flag: "GB", name: "Reino Unido", gdp: "$4.26T", priority: "Nivel 1 - Mercado Local" },
        { rank: 3, flag: "FR", name: "Francia", gdp: "$3.60T", priority: "Nivel 1" },
        { rank: 4, flag: "IT", name: "Italia", gdp: "$2.74T", priority: "Nivel 2" },
        { rank: 5, flag: "RU", name: "Rusia", gdp: "$2.66T", priority: "Nivel 2" },
        { rank: 6, flag: "ES", name: "Espana", gdp: "$2.09T", priority: "Nivel 2" },
        { rank: 7, flag: "NL", name: "Paises Bajos", gdp: "$1.45T", priority: "Nivel 3" },
        { rank: 8, flag: "CH", name: "Suiza", gdp: "$1.15T", priority: "Nivel 3" },
        { rank: 9, flag: "PL", name: "Polonia", gdp: "$1.13T", priority: "Nivel 3" },
        { rank: 10, flag: "IE", name: "Irlanda", gdp: "$779.4B", priority: "Nivel 3" }
      ],
      insight: "Las 3 principales economias (Alemania, Reino Unido, Francia) suman mas de $13 billones en PIB. EACO se dirige primero a estos mercados para un impacto maximo."
    },
    assets: {
      title: "Las 30 Clases de Activos Liquidos mas Fuertes del Reino Unido y Europa",
      subtitle: "Por categoria - no es consejo de inversion individual",
      categories: [
        { icon: "B", name: "Moneda y Equivalentes de Efectivo", liquidity: "Muy Alta", color: "blue", items: ["Efectivo GBP", "Efectivo EUR", "UK Gilts / EU T-Bills", "Fondos de Mercado Monetario", "Depositos Bancarios"] },
        { icon: "S", name: "Acciones", liquidity: "Muy Alta", color: "green", items: ["UK FTSE 100", "EU STOXX 50", "UK FTSE 250", "DAX Aleman", "CAC 40 Frances"] },
        { icon: "B", name: "Bonos", liquidity: "Alta", color: "purple", items: ["UK Gilts (Largo plazo)", "Bunds Alemanes", "OAT Frances", "Bonos Corporativos Grado Inversion UE", "Bonos Alto Rendimiento UE"] },
        { icon: "R", name: "Bienes Raices", liquidity: "Media-Alta", color: "orange", items: ["REITs UK", "REITs Europeos", "Fondos de Propiedad Comercial", "Fondos de Infraestructura"] },
        { icon: "C", name: "Materias Primas", liquidity: "Alta", color: "amber", items: ["Petróleo Brent", "Gas Natural Europeo", "Oro", "Plata", "ETS Carbono UE"] },
        { icon: "D", name: "Activos Digitales", liquidity: "Alta", color: "cyan", items: ["EACO + SOL", "Bitcoin", "Ethereum", "Stablecoins EUR", "Bonos Digitales Cumplidores UE"] }
      ],
      tableTitle: "Resumen: 30 Clases de Activos Liquidos mas Fuertes",
      table: {
        headers: ["Categoria", "Liquidez", "Ejemplos"],
        rows: [
          ["Moneda", "Muy Alta", "GBP, EUR, Fondos Mercado Monetario"],
          ["Acciones", "Muy Alta", "FTSE 100, DAX, STOXX 50"],
          ["Bonos", "Alta", "Bunds, Gilts, OAT"],
          ["Bienes Raices", "Media-Alta", "REITs, Fondos Infraestructura"],
          ["Materias Primas", "Alta", "Brent, Gas Natural, Oro"],
          ["Activos Digitales", "Alta", "EACO+SOL, BTC, ETH, Stablecoins"]
        ]
      }
    },
    model: {
      title: "Modelo de Civilizacion EACO",
      subtitle: "Energia x Actitud x Cooperacion x Optimizacion",
      intro: "Los cuatro pilares fundamentales de EACO, integrados con sistemas de activos europeos para formar un modelo de civilizacion complementario.",
      pillars: [
        { letter: "E", name: "Energia", desc: "Impulsando la civilizacion con datos de energia sostenible", euroLink: "EU ETS, datos de fondos verdes europeos, indicadores de transicion energetica forman el modulo de Energia de EACO", color: "green" },
        { letter: "A", name: "Actitud", desc: "La mentalidad de construir la mejor civilizacion terrestre", euroLink: "Esiritu de innovacion europea, mentalidad de liderazgo ESG, enfoque de sostenibilidad primero", color: "blue" },
        { letter: "C", name: "Cooperacion", desc: "Mecanismos de colaboracion transfronteriza", euroLink: "Marco de cooperacion transnacional de la UE, estandares regulatorios europeos, benchmarks ESG", color: "purple" },
        { letter: "O", name: "Optimizacion", desc: "Mejora continua a traves de IA y datos", euroLink: "Cumplimiento de EU AI Act, estandares MiCA, el modelo AI+Web3 mas seguro del mundo", color: "orange" }
      ],
      integrationTitle: "5 Vias de Integracion Principal",
      integrations: [
        { num: 1, title: "Activos Europeos como Anclas RWA", desc: "Los activos europeos sirven como fuentes de datos de activos del mundo real, modelos de anclaje de valor, conjuntos de entrenamiento de IA y entradas de indicadores economicos para EACO." },
        { num: 2, title: "Cooperacion a traves de Marcos UE", desc: "EACO adopta mecanismos de cooperacion transnacional de la UE, marcos regulatorios, estandares ESG y sistemas de mercado de carbono." },
        { num: 3, title: "ESG + Modulo de Energia", desc: "Integrar EU ETS, datos de fondos verdes europeos e indicadores de transicion energetica para fortalecer el modulo de Energia de EACO." },
        { num: 4, title: "Cumplimiento IA + Activos Digitales", desc: "Aprovechar EU AI Act y marcos MiCA para construir el modelo AI+Web3 mas cumplidor del mundo." },
        { num: 5, title: "Entradas de Indice de Civilizacion", desc: "Indices de acciones europeas, rendimientos de bonos, precios de energia, precios de carbono, indice de innovacion IA y liquidez de activos digitales alimentan el ECI." }
      ]
    },
    eci: {
      title: "Indice de Civilizacion de la Tierra (ECI)",
      subtitle: "La version Web3 del indice de civilizacion de la Tierra",
      intro: "ECI es un indice compuesto construido a partir de categorias de activos europeos, que sirve como capa de valor de civilizacion de EACO.",
      components: [
        { name: "Indices de Acciones Europeas", weight: "20%", desc: "Datos de rendimiento de FTSE 100, DAX, CAC 40, STOXX 50" },
        { name: "Rendimientos de Bonos Europeos", weight: "20%", desc: "Curvas de rendimiento de UK Gilts, Bunds alemanes, OAT franceses" },
        { name: "Precios de Energia Europeos", weight: "15%", desc: "Precios de petroleo Brent, gas natural, electricidad" },
        { name: "Precios de Carbono UE", weight: "15%", desc: "Precios de asignaciones de carbono EU ETS" },
        { name: "Indice de Innovacion IA Europeo", weight: "15%", desc: "Patentes de IA, inversion en I+D, actividad de startups" },
        { name: "Liquidez de Activos Digitales Europeos", weight: "15%", desc: "Volumenes de negociacion y liquidez de BTC, ETH, EACO" }
      ],
      formula: "ECI = 0.20 x IndiceAcciones + 0.20 x RendimientoBonos + 0.15 x Energia + 0.15 x Carbono + 0.15 x IndiceIA + 0.15 x LiquidezDigital"
    },
    ai: {
      title: "Arquitectura de Modulos IA de EACO",
      subtitle: "Cuatro modulos de IA alineados con el modelo de civilizacion E-A-C-O",
      modules: [
        { name: "Modulo IA-Energia", icon: "E", desc: "Procesamiento de datos de energia en tiempo real, puntuacion ESG, seguimiento de huella de carbono", inputs: ["Fuentes de precios EU ETS", "Precios Brent/Gas", "Datos de energia verde"], output: "Puntuacion de Temperatura Economica Terrestre", color: "green" },
        { name: "Modulo IA-Actitud", icon: "A", desc: "Analisis de sentimiento, seguimiento de actitud del mercado, metricas de salud comunitaria", inputs: ["Sentimiento redes sociales", "Analisis de noticias", "Participacion comunitaria"], output: "Indice de Actitud de Civilizacion", color: "blue" },
        { name: "Modulo IA-Cooperacion", icon: "C", desc: "Monitoreo de colaboracion transfronteriza, seguimiento de cumplimiento regulatorio", inputs: ["Fuentes regulatorias UE", "Datos comercio transfronterizo", "Puntuaciones cumplimiento ESG"], output: "Puntuacion de Salud de Cooperacion", color: "purple" },
        { name: "Modulo IA-Optimizacion", icon: "O", desc: "Optimizacion continua del modelo, gestion de riesgos, analisis predictivo", inputs: ["Datos cumplimiento MiCA", "Alineacion AI Act", "Indicadores de riesgo de mercado"], output: "Recomendaciones de Optimizacion", color: "orange" }
      ],
      flowTitle: "Arquitectura de Flujo de Datos IA",
      flow: ["Ingestion de Datos", "Preprocesamiento y Validacion", "Entrenamiento de Modelo IA", "Computacion de Indice de Civilizacion", "Mapeo de Valor On-chain", "Reflexion de Valor del Token EACO"]
    },
    roadmap: {
      title: "Hoja de Ruta de Desarrollo de EACO",
      subtitle: "De la integracion de datos al activo de civilizacion global",
      threeStepTitle: "Hoja de Ruta Estrategica de 3 Pasos",
      threeSteps: [
        { step: "Paso 1", title: "Integracion de Datos", time: "Mas facil - Inmediato", desc: "Conectar indices de acciones europeas, rendimientos de bonos, precios de carbono y precios de energia para formar la Capa de Datos de Civilizacion de EACO.", layer: "Capa de Datos de Civilizacion" },
        { step: "Paso 2", title: "Entrenamiento de Modelo IA", time: "Mediano plazo", desc: "Entrenar modulo de Energia con datos ESG, modulo de Cooperacion con marcos UE, modulo de Optimizacion con sistemas regulatorios para formar la Capa IA de Civilizacion de EACO.", layer: "Capa IA de Civilizacion" },
        { step: "Paso 3", title: "Mapeo de Valor Web3", time: "Largo plazo", desc: "Mapear categorias de activos europeos al indice de valor de civilizacion de EACO, formando el modelo de anclaje de civilizacion global Earth E (EACO).", layer: "Capa de Activos de Civilizacion Global" }
      ],
      twelveMonthTitle: "Hoja de Ruta de Desarrollo de 12 Meses",
      months: [
        { month: "M1-M2", title: "Lanzamiento de Sitio y Comunidad", desc: "Lanzar sitio web multilingue, establecer canales de comunidad global, liquidez DEX inicial en Solana" },
        { month: "M3-M4", title: "Integracion de Fuentes de Datos", desc: "Integrar APIs de precios de acciones/bonos/energia/carbono europeos, construir pipeline de datos ECI" },
        { month: "M5-M6", title: "Prototipo de Indice ECI", desc: "Lanzar prototipo de indice ECI, publicar libro blanco v1.0, comenzar desarrollo de modulos IA" },
        { month: "M7-M8", title: "Beta de Modulos IA", desc: "Desplegar modulos IA-Energia e IA-Cooperacion, asociar con proveedores de datos ESG" },
        { month: "M9-M10", title: "Lanzamiento de Productos RWA", desc: "Lanzar productos respaldados por RWA, preparacion cumplimiento MiCA, solicitudes de cotizacion en bolsas" },
        { month: "M11-M12", title: "Ecosistema Completo", desc: "Despliegue completo de modulos IA, indice ECI en vivo, alianzas institucionales, expansion global" }
      ]
    },
    whitepaper: {
      title: "Estructura del Libro Blanco de EACO",
      subtitle: "Marco completo del libro blanco para EACO x Activos Europeos",
      sections: [
        { num: "1", title: "Resumen Ejecutivo", desc: "Vision, mision y propuesta de valor de EACO como Earth's Best Coin" },
        { num: "2", title: "Modelo de Civilizacion EACO", desc: "Marco detallado de Energia x Actitud x Cooperacion x Optimizacion" },
        { num: "3", title: "Panorama de Activos Europeos", desc: "Top 10 paises por PIB, 30 clases de activos liquidos, analisis de mercado" },
        { num: "4", title: "Indice de Civilizacion de la Tierra ECI", desc: "Construccion del indice, metodologia de ponderacion, fuentes de datos" },
        { num: "5", title: "Diseno de Modulos IA", desc: "Arquitectura de cuatro modulos IA, metodologia de entrenamiento, plan de despliegue" },
        { num: "6", title: "Marco de Integracion RWA", desc: "Tokenizacion de activos del mundo real, anclaje de activos europeos, cumplimiento" },
        { num: "7", title: "Arquitectura Web3", desc: "Blockchain Solana, contratos inteligentes, tokenomia, gobernanza" },
        { num: "8", title: "Cumplimiento Regulatorio", desc: "Alineacion MiCA, cumplimiento EU AI Act, marco legal transfronterizo" },
        { num: "9", title: "Hoja de Ruta y Hitos", desc: "Hoja de ruta estrategica de 3 pasos, plan de desarrollo de 12 meses, vision a largo plazo" },
        { num: "10", title: "Tokenomia y Objetivos de Precio", desc: "Distribucion de tokens, modelo de utilidad, estrategia de hitos de precio" },
        { num: "11", title: "Analisis de Riesgos", desc: "Riesgos de mercado, regulatorios, tecnicos, estrategias de mitigacion" },
        { num: "12", title: "Conclusion y Vision", desc: "EACO como la mejor moneda de civilizacion AI+RWA+Web3 de la tierra" }
      ]
    },
    web3: {
      title: "Top 10 Paises Europeos Amigables con Web3",
      subtitle: "Grupo Europa EACO - Mercados clave para la adopcion de Web3 y cripto",
      tableHeader: ["Rango", "Pais", "Ventajas Clave y Evidencia"],
      countries: [
        { rank: 1, flag: "DE", name: "Alemania", advantage: "Centro de cumplimiento y lider en infraestructura financiera. Tiene la mayor cantidad de licencias MiCA de la UE (57), casi un cuarto del total. Integra el cripto en marcos financieros consolidados antes de MiCA, brindando una ruta clara para empresas reguladas." },
        { rank: 2, flag: "CH", name: "Suiza", advantage: "\"Crypto Valley\" y hub de innovacion. El Crypto Valley de Zug es uno de los primeros clusters blockchain del mundo. Marco regulatorio claro y de apoyo, atrayendo mas de 900 empresas cripto registradas." },
        { rank: 3, flag: "FR", name: "Francia", advantage: "Impulso estrategico del gobierno. Obtuvo 26 licencias MiCA, la segunda en la UE. El gobierno designo blockchain como area clave de desarrollo mediante el plan \"Francia 2030\", impulsando la implementacion de Web3." },
        { rank: 4, flag: "LU", name: "Luxemburgo", advantage: "Centro financiero institucional. Sistema financiero estable (rating AAA), con un enorme ecosistema de fondos (aprox. 8.29 billones de euros en activos). Coinbase y otros gigantes lo eligieron como centro europeo de operaciones MiCA." },
        { rank: 5, flag: "MT", name: "Malta", advantage: "\"Isla Blockchain\". Aprobo legislacion blockchain ya en 2018, uno de los primeros paises europeos en ofrecer un marco legal integral para cripto. Su marco VFA se alinea estrechamente con MiCA." },
        { rank: 6, flag: "EE", name: "Estonia", advantage: "Pionero en gobierno digital. Programa unico de e-Residency y sistema de identidad digital maduro. Aunque la regulacion se ha endurecido, el marco sigue siendo atractivo para empresas cripto." },
        { rank: 7, flag: "NL", name: "Paises Bajos", advantage: "Ambiente abierto de tecnologia e innovacion. Amsterdam se ha convertido en un nodo importante para DeFi y DePIN. Su clima comercial abierto ha atraido a numerosas startups Web3." },
        { rank: 8, flag: "IT", name: "Italia", advantage: "Alta actividad de mercado. Altas puntuaciones en rankings globales de amigabilidad cripto, con destacada aceptacion de pagos con criptomonedas. Ya cuenta con mas de 73 proveedores de servicios cripto registrados." },
        { rank: 9, flag: "PT", name: "Portugal", advantage: "Ventajas fiscales (sujetas a nuevas politicas). Anteriormente un \"paraiso para nomades digitales\" con ganancias de capital cripto libres de impuestos, aunque esta ventaja esta disminuyendo. Actualmente en fase de transicion." },
        { rank: 10, flag: "IE", name: "Irlanda", advantage: "Centro de activos financieros. Junto con Alemania, Francia, Paises Bajos y Luxemburgo, concentra el 72% de los activos financieros de la UE. Como centro financiero internacional, se esta convirtiendo en una puerta importante para empresas cripto." }
      ],
      trendTitle: "Analisis de Tendencias Clave",
      trend: "La mayor variable en el desarrollo Web3 europeo es la implementacion completa de MiCA. Una vez que se aplique totalmente en 2026, la capacidad de cumplimiento se convierte en el factor competitivo clave. Alemania, Francia, Luxemburgo y otros con fuerte poder financiero y rutas regulatorias claras son los principales ganadores.",
      ukNote: "El Reino Unido no entro en el top diez. Aunque Londres tiene una comunidad cripto activa, sus puntuaciones de claridad regulatoria y amigabilidad comercial son menores que los paises enumerados. - Grupo Europa EACO"
    },

    footer: {
      disclaimer: "EACO es un proyecto de modelo de civilizacion IA+RWA+Web3. Esto no es consejo financiero. Todos los objetivos de precio son hitos aspiracionales.",
      rights: "Todos los derechos reservados.",
      links: "Enlaces Rapidos",
      community: "Comunidad"
    }
  },

  // ============================================================
  // FRENCH
  // ============================================================
  fr: {
    _meta: { name: "Francais", flag: "FR", dir: "ltr" },
    nav: {
      home: "Accueil",
      price: "Objectifs de Prix",
      gdp: "PIB Europe",
      assets: "Actifs Liquides",
      model: "Modele de Civilisation",
      eci: "Indice ECI",
      ai: "Modules IA",
      roadmap: "Feuille de Route",
      whitepaper: "Livre Blanc",
      web3: "Pays Web3"
    },
    hero: {
      title: "Earth's Best Coin",
      subtitle: "Modele de Civilisation IA + RWA + Web3",
      tagline: "Energie x Attitude x Cooperation x Optimisation",
      cta: "Explorer EACO",
      contract: "Adresse du Contrat",
      website: "Site Officiel"
    },
    price: {
      title: "Objectifs de Prix EACO",
      subtitle: "Etapes de valeur progressives, du penny au premium",
      stages: [
        { name: "1 Penny Livre", value: "L0.01", desc: "Phase de construction communautaire - etablissement de l'adoption et de la sensibilisation" },
        { name: "1 Dime Livre", value: "L0.10", desc: "Phase d'utilite - EACO integre dans les ecosystemes d'actifs du monde reel" },
        { name: "1 Livre", value: "L1.00", desc: "Phase de reconnaissance - EACO devient une unite de civilisation numerique reconnue" },
        { name: "10-20 Livres", value: "L10-20", desc: "Phase institutionnelle - adoption institutionnelle et integration de l'indice ECI" },
        { name: "100-200 Livres", value: "L100-200", desc: "Phase de reserve mondiale - EACO comme standard d'actif de civilisation globale" }
      ],
      howToAchieve: "Comment Atteindre Cela Etape par Etape",
      steps: [
        { phase: "Phase 1", title: "Fondation et Communaute", time: "Mois 1-6", desc: "Construire la communaute mondiale, etablir une presence multilingue, lancer l'application web EACO et creer des pools de liquidite initiaux sur Solana DEX." },
        { phase: "Phase 2", title: "Utilite et Integration RWA", time: "Mois 7-12", desc: "Connecter les flux de donnees d'actifs europeens, construire le prototype d'indice ECI, lancer les modules IA pour l'analyse des donnees, etablir des partenariats avec les plateformes ESG europeennes." },
        { phase: "Phase 3", title: "Adoption Institutionnelle", time: "Annee 2", desc: "Integrer avec les cadres conformes MiCA, lancer des produits RWA de grade institutionnel, obtenir des cotes sur des plateformes de niveau 1." },
        { phase: "Phase 4", title: "Actif de Reserve Mondial", time: "Annee 3+", desc: "Deploiement complet du modele de civilisation EACO, adoption mondiale de l'indice ECI, EACO reconnu comme la meilleure piece IA+RWA+Web3 de la terre." }
      ]
    },
    gdp: {
      title: "Top 10 Pays par PIB en Europe",
      subtitle: "Previsions FMI 2026 - Marches Cibles EACO",
      source: "Source: FMI Perspectives Economiques Mondiales 2026",
      tableHeader: ["Rang", "Pays", "PIB 2026 (Prevision)", "Priorite de Marche"],
      countries: [
        { rank: 1, flag: "DE", name: "Allemagne", gdp: "$5.45T", priority: "Niveau 1" },
        { rank: 2, flag: "GB", name: "Royaume-Uni", gdp: "$4.26T", priority: "Niveau 1 - Marche National" },
        { rank: 3, flag: "FR", name: "France", gdp: "$3.60T", priority: "Niveau 1" },
        { rank: 4, flag: "IT", name: "Italie", gdp: "$2.74T", priority: "Niveau 2" },
        { rank: 5, flag: "RU", name: "Russie", gdp: "$2.66T", priority: "Niveau 2" },
        { rank: 6, flag: "ES", name: "Espagne", gdp: "$2.09T", priority: "Niveau 2" },
        { rank: 7, flag: "NL", name: "Pays-Bas", gdp: "$1.45T", priority: "Niveau 3" },
        { rank: 8, flag: "CH", name: "Suisse", gdp: "$1.15T", priority: "Niveau 3" },
        { rank: 9, flag: "PL", name: "Pologne", gdp: "$1.13T", priority: "Niveau 3" },
        { rank: 10, flag: "IE", name: "Irlande", gdp: "$779.4B", priority: "Niveau 3" }
      ],
      insight: "Les 3 premieres economies (Allemagne, Royaume-Uni, France) totalisent plus de 13 billions de dollars de PIB. EACO cible d'abord ces marches pour un impact maximal."
    },
    assets: {
      title: "Les 30 Classes d'Actifs Liquides les Plus Fortes du Royaume-Uni et d'Europe",
      subtitle: "Par categorie - pas de conseil d'investissement individuel",
      categories: [
        { icon: "B", name: "Monnaie et Equivalents de Caisses", liquidity: "Tres Elevee", color: "blue", items: ["Especes GBP", "Especes EUR", "UK Gilts / EU T-Bills", "Fonds du Marche Monetaire", "Deposits Bancaires"] },
        { icon: "S", name: "Actions", liquidity: "Tres Elevee", color: "green", items: ["UK FTSE 100", "EU STOXX 50", "UK FTSE 250", "DAX Allemand", "CAC 40 Francais"] },
        { icon: "B", name: "Obligations", liquidity: "Elevee", color: "purple", items: ["UK Gilts (Long terme)", "Bunds Allemands", "OAT Francais", "Obligations Corp. Grade Investissement UE", "Obligations Haut Rendement UE"] },
        { icon: "R", name: "Immobilier", liquidity: "Moyenne-Elevee", color: "orange", items: ["REITs UK", "REITs Europeens", "Fonds Immobilier Commercial", "Fonds d'Infrastructure"] },
        { icon: "C", name: "Matières Premieres", liquidity: "Elevee", color: "amber", items: ["Petrole Brent", "Gaz Naturel Europeen", "Or", "Argent", "ETS Carbone UE"] },
        { icon: "D", name: "Actifs Numeriques", liquidity: "Elevee", color: "cyan", items: ["EACO + SOL", "Bitcoin", "Ethereum", "Stablecoins EUR", "Obligations Numeriques Conformes UE"] }
      ],
      tableTitle: "Resume: 30 Classes d'Actifs Liquides les Plus Fortes",
      table: {
        headers: ["Categorie", "Liquidite", "Exemples"],
        rows: [
          ["Monnaie", "Tres Elevee", "GBP, EUR, Fonds Marche Monetaire"],
          ["Actions", "Tres Elevee", "FTSE 100, DAX, STOXX 50"],
          ["Obligations", "Elevee", "Bunds, Gilts, OAT"],
          ["Immobilier", "Moyenne-Elevee", "REITs, Fonds Infrastructure"],
          ["Matières Premieres", "Elevee", "Brent, Gaz Naturel, Or"],
          ["Actifs Numeriques", "Elevee", "EACO+SOL, BTC, ETH, Stablecoins"]
        ]
      }
    },
    model: {
      title: "Modele de Civilisation EACO",
      subtitle: "Energie x Attitude x Cooperation x Optimisation",
      intro: "Les quatre piliers fondamentaux d'EACO, integres avec les systemes d'actifs europeens pour former un modele de civilisation complementaire.",
      pillars: [
        { letter: "E", name: "Energie", desc: "Alimenter la civilisation avec des donnees d'energie durable", euroLink: "EU ETS, donnees des fonds verts europeens, indicateurs de transition energetique forment le module Energie d'EACO", color: "green" },
        { letter: "A", name: "Attitude", desc: "L'etat d'esprit pour construire la meilleure civilisation terrestre", euroLink: "Esprit d'innovation europeen, mentalite de leadership ESG, approche developpement durable d'abord", color: "blue" },
        { letter: "C", name: "Cooperation", desc: "Mechanismes de collaboration transfrontaliere", euroLink: "Cadre de cooperation transnationale UE, normes reglementaires europeennes, benchmarks ESG", color: "purple" },
        { letter: "O", name: "Optimisation", desc: "Amelioration continue par l'IA et les donnees", euroLink: "Conformite EU AI Act, normes MiCA, le modele IA+Web3 le plus sur au monde", color: "orange" }
      ],
      integrationTitle: "5 Voies d'Integration Principales",
      integrations: [
        { num: 1, title: "Actifs Europeens comme Ancres RWA", desc: "Les actifs europeens servent de sources de donnees d'actifs du monde reel, de modeles d'ancrage de valeur, d'ensembles d'entrainement IA et d'entrees d'indicateurs economiques pour EACO." },
        { num: 2, title: "Cooperation via Cadres UE", desc: "EACO adopte les mecanismes de cooperation transnationale de l'UE, les cadres reglementaires, les normes ESG et les systemes de marche du carbone." },
        { num: 3, title: "ESG + Module Energie", desc: "Integrer l'EU ETS, les donnees des fonds verts europeens et les indicateurs de transition energetique pour renforcer le module Energie d'EACO." },
        { num: 4, title: "Conformite IA + Actifs Numeriques", desc: "Tirer parti de l'EU AI Act et des cadres MiCA pour construire le modele IA+Web3 le plus conforme au monde." },
        { num: 5, title: "Entrees d'Indice de Civilisation", desc: "Indices boursiers europeens, rendements obligataires, prix de l'energie, prix du carbone, indice d'innovation IA et liquidite des actifs numeriques alimentent l'ECI." }
      ]
    },
    eci: {
      title: "Indice de Civilisation de la Terre (ECI)",
      subtitle: "La version Web3 de l'indice de civilisation de la Terre",
      intro: "L'ECI est un indice compose construit a partir de categories d'actifs europeens, servant de couche de valeur de civilisation d'EACO.",
      components: [
        { name: "Indices Boursiers Europeens", weight: "20%", desc: "Donnees de performance FTSE 100, DAX, CAC 40, STOXX 50" },
        { name: "Rendements Obligataires Europeens", weight: "20%", desc: "Courbes de rendement UK Gilts, Bunds allemands, OAT francais" },
        { name: "Prix de l'Energie Europeenne", weight: "15%", desc: "Prix du petrole Brent, gaz naturel, electricite" },
        { name: "Prix du Carbone UE", weight: "15%", desc: "Prix des quotas carbone EU ETS" },
        { name: "Indice d'Innovation IA Europeen", weight: "15%", desc: "Brevets IA, investissement R&D, activite des startups" },
        { name: "Liquidite des Actifs Numeriques Europeens", weight: "15%", desc: "Volumes de negociation et liquidite BTC, ETH, EACO" }
      ],
      formula: "ECI = 0.20 x IndiceBoursier + 0.20 x RendementObligataire + 0.15 x Energie + 0.15 x Carbone + 0.15 x IndiceIA + 0.15 x LiquiditeNumerique"
    },
    ai: {
      title: "Architecture des Modules IA d'EACO",
      subtitle: "Quatre modules IA alignes avec le modele de civilisation E-A-C-O",
      modules: [
        { name: "Module IA-Energie", icon: "E", desc: "Traitement des donnees energetiques en temps reel, scoring ESG, suivi de l'empreinte carbone", inputs: ["Flux de prix EU ETS", "Prix Brent/Gaz", "Donnees energie verte"], output: "Score de Temperature Economique Terrestre", color: "green" },
        { name: "Module IA-Attitude", icon: "A", desc: "Analyse de sentiment, suivi de l'attitude du marche, indicateurs de sante communautaire", inputs: ["Sentiment reseaux sociaux", "Analyse de nouvelles", "Engagement communautaire"], output: "Indice d'Attitude de Civilisation", color: "blue" },
        { name: "Module IA-Cooperation", icon: "C", desc: "Surveillance de la collaboration transfrontaliere, suivi de la conformite reglementaire", inputs: ["Flux reglementaires UE", "Donnees commerce transfrontalier", "Scores conformite ESG"], output: "Score de Sante de Cooperation", color: "purple" },
        { name: "Module IA-Optimisation", icon: "O", desc: "Optimisation continue du modele, gestion des risques, analyse predictive", inputs: ["Donnees conformite MiCA", "Alignement AI Act", "Indicateurs de risque de marche"], output: "Recommandations d'Optimisation", color: "orange" }
      ],
      flowTitle: "Architecture de Flux de Donnees IA",
      flow: ["Ingestion de Donnees", "Pretraitement et Validation", "Entrainement du Modele IA", "Calcul de l'Indice de Civilisation", "Mappage de Valeur On-chain", "Reflexion de la Valeur du Token EACO"]
    },
    roadmap: {
      title: "Feuille de Route de Developpement EACO",
      subtitle: "De l'integration des donnees a l'actif de civilisation mondial",
      threeStepTitle: "Feuille de Route Strategique en 3 Etapes",
      threeSteps: [
        { step: "Etape 1", title: "Integration des Donnees", time: "Plus facile - Immediate", desc: "Connecter les indices boursiers europeens, les rendements obligataires, les prix du carbone et de l'energie pour former la Couche de Donnees de Civilisation d'EACO.", layer: "Couche de Donnees de Civilisation" },
        { step: "Etape 2", title: "Entrainement du Modele IA", time: "Moyen terme", desc: "Entrainer le module Energie avec les donnees ESG, le module Cooperation avec les cadres UE, le module Optimisation avec les systemes reglementaires pour former la Couche IA de Civilisation d'EACO.", layer: "Couche IA de Civilisation" },
        { step: "Etape 3", title: "Mappage de Valeur Web3", time: "Long terme", desc: "Mapper les categories d'actifs europeens a l'indice de valeur de civilisation d'EACO, formant le modele d'ancrage de civilisation mondiale Earth E (EACO).", layer: "Couche d'Actifs de Civilisation Mondiale" }
      ],
      twelveMonthTitle: "Feuille de Route de Developpement sur 12 Mois",
      months: [
        { month: "M1-M2", title: "Lancement Site et Communaute", desc: "Lancer le site web multilingue, etablir les canaux communautaires mondiaux, liquidite DEX initiale sur Solana" },
        { month: "M3-M4", title: "Integration des Sources de Donnees", desc: "Integrer les APIs de prix actions/bonos/energie/carbone europeens, construire le pipeline de donnees ECI" },
        { month: "M5-M6", title: "Prototype d'Indice ECI", desc: "Lancer le prototype d'indice ECI, publier le livre blanc v1.0, commencer le developpement des modules IA" },
        { month: "M7-M8", title: "Beta des Modules IA", desc: "Deployer les modules IA-Energie et IA-Cooperation, s'associer avec les fournisseurs de donnees ESG" },
        { month: "M9-M10", title: "Lancement de Produits RWA", desc: "Lancer des produits garantis par RWA, preparation conformite MiCA, demandes de cotation en bourse" },
        { month: "M11-M12", title: "Ecosysteme Complet", desc: "Deploiement complet des modules IA, indice ECI en direct, partenariats institutionnels, expansion mondiale" }
      ]
    },
    whitepaper: {
      title: "Structure du Livre Blanc EACO",
      subtitle: "Cadre complet du livre blanc pour EACO x Actifs Europeens",
      sections: [
        { num: "1", title: "Resume Executif", desc: "Vision, mission et proposition de valeur d'EACO en tant que Earth's Best Coin" },
        { num: "2", title: "Modele de Civilisation EACO", desc: "Cadre detaille Energie x Attitude x Cooperation x Optimisation" },
        { num: "3", title: "Paysage des Actifs Europeens", desc: "Top 10 pays par PIB, 30 classes d'actifs liquides, analyse du marche" },
        { num: "4", title: "Indice de Civilisation de la Terre ECI", desc: "Construction de l'indice, methodologie de ponderation, sources de donnees" },
        { num: "5", title: "Conception des Modules IA", desc: "Architecture des quatre modules IA, methodologie d'entrainement, plan de deploiement" },
        { num: "6", title: "Cadre d'Integration RWA", desc: "Tokenisation d'actifs du monde reel, ancrage d'actifs europeens, conformite" },
        { num: "7", title: "Architecture Web3", desc: "Blockchain Solana, contrats intelligents, tokenomique, gouvernance" },
        { num: "8", title: "Conformite Reglementaire", desc: "Alignement MiCA, conformite EU AI Act, cadre juridique transfrontalier" },
        { num: "9", title: "Feuille de Route et Jalons", desc: "Feuille de route strategique en 3 etapes, plan de developpement sur 12 mois, vision a long terme" },
        { num: "10", title: "Tokenomique et Objectifs de Prix", desc: "Distribution de tokens, modele d'utilite, strategie de jalons de prix" },
        { num: "11", title: "Analyse des Risques", desc: "Risques de marche, reglementaires, techniques, strategies d'attenuation" },
        { num: "12", title: "Conclusion et Vision", desc: "EACO comme la meilleure piece de civilisation IA+RWA+Web3 de la terre" }
      ]
    },
    web3: {
      title: "Top 10 Pays Europeens Favorables au Web3",
      subtitle: "Groupe Europe EACO - Marches cles pour l'adoption Web3 et crypto",
      tableHeader: ["Rang", "Pays", "Avantages Cles et Preuves"],
      countries: [
        { rank: 1, flag: "DE", name: "Allemagne", advantage: "Centre de conformite et leader en infrastructure financiere. Detient le plus grand nombre de licences MiCA dans l'UE (57), pres d'un quart du total. Integre le crypto dans des cadres financiers etablis avant MiCA, offrant une voie claire pour les entreprises reglementees." },
        { rank: 2, flag: "CH", name: "Suisse", advantage: "\"Crypto Valley\" et hub d'innovation. Le Crypto Valley de Zug est l'un des premiers clusters blockchain au monde. Cadre reglementaire clair et favorable, attirant plus de 900 entreprises crypto enregistrees." },
        { rank: 3, flag: "FR", name: "France", advantage: "Push strategique du gouvernement. Obtenu 26 licences MiCA, deuxieme en UE. Le gouvernement a designe la blockchain comme domaine cle via le plan \"France 2030\", stimulant l'implementation Web3." },
        { rank: 4, flag: "LU", name: "Luxembourg", advantage: "Centre financier institutionnel. Systeme financier stable (rating AAA), vaste ecosysteme de fonds (env. 8,29 billions d'euros). Coinbase et autres geants l'ont choisi comme centre europeen d'operations MiCA." },
        { rank: 5, flag: "MT", name: "Malte", advantage: "\"Ile Blockchain\". A adopte une legislation blockchain des 2018, l'un des premiers pays europeens a offrir un cadre legal complet pour le crypto. Son cadre VFA national s'aligne etroitement avec MiCA." },
        { rank: 6, flag: "EE", name: "Estonie", advantage: "Pionnier du gouvernement numerique. Programme unique d'e-Residency et systeme d'identite numerique mature. Bien que la reglementation se soit durcie, le cadre reste attractif pour les entreprises crypto." },
        { rank: 7, flag: "NL", name: "Pays-Bas", advantage: "Atmosphere ouverte a la technologie et l'innovation. Amsterdam est devenu un noeud important pour la DeFi et le DePIN. Son climat commercial ouvert attire de nombreuses startups Web3." },
        { rank: 8, flag: "IT", name: "Italie", advantage: "Forte activite du marche. Bons scores dans les classements mondiaux de convivialite crypto, avec une excellente acceptation des paiements crypto. Compte deja plus de 73 prestataires de services crypto enregistres." },
        { rank: 9, flag: "PT", name: "Portugal", advantage: "Avantages fiscaux (soumis aux nouvelles politiques). Autrefois \"paradis des nomades numeriques\" avec des gains en capital crypto exoneres d'impots, bien que cet avantage diminue. Actuellement en phase de transition." },
        { rank: 10, flag: "IE", name: "Irlande", advantage: "Hub d'actifs financiers. Avec l'Allemagne, la France, les Pays-Bas et le Luxembourg, concentre environ 72% des actifs financiers de l'UE. En tant que centre financier international, devient une porte d'entree importante pour les entreprises crypto." }
      ],
      trendTitle: "Analyse des Tendances Cles",
      trend: "La principale variable du developpement Web3 europeen est la mise en oeuvre complete de MiCA. Une fois appliquee en 2026, la capacite de conformite devient le facteur competitif cle. L'Allemagne, la France, le Luxembourg et d'autres avec une force financiere et des voies reglementaires claires sont les principaux gagnants.",
      ukNote: "Le Royaume-Uni n'est pas entre dans le top dix. Bien que Londres ait une communaute crypto active, ses scores de clarte reglementaire et de convivialite commerciale sont inferieurs aux pays listes. - Groupe Europe EACO"
    },

    footer: {
      disclaimer: "EACO est un projet de modele de civilisation IA+RWA+Web3. Ceci n'est pas un conseil financier. Tous les objectifs de prix sont des jalons aspirationnels.",
      rights: "Tous droits reserves.",
      links: "Liens Rapides",
      community: "Communaute"
    }
  },

  // ============================================================
  // ARABIC (RTL)
  // ============================================================
  ar: {
    _meta: { name: "العربية", flag: "AR", dir: "rtl" },
    nav: {
      home: "الرئيسية",
      price: "أهداف السعر",
      gdp: "ناتج أوروبا",
      assets: "الأصول السائلة",
      model: "نموذج الحضارة",
      eci: "مؤشر ECI",
      ai: "وحدات الذكاء",
      roadmap: "خارطة الطريق",
      whitepaper: "الورقة البيضاء",
      web3: "دول Web3"
    },
    hero: {
      title: "أفضل عملة على وجه الأرض",
      subtitle: "نموذج حضارة الذكاء الاصطناعي + RWA + Web3",
      tagline: "الطاقة x المواقف x التعاون x التحسين",
      cta: "استكشف EACO",
      contract: "عنوان العقد",
      website: "الموقع الرسمي"
    },
    price: {
      title: "أهداف سعر EACO",
      subtitle: "مراحل قيمة تدريجية من البنس إلى الممتاز",
      stages: [
        { name: "1 بنس جنيه", value: "£0.01", desc: "مرحلة بناء المجتمع - تأسيس التبني والوعي الشعبي" },
        { name: "1 عشرة سنتات جنيه", value: "£0.10", desc: "مرحلة المنفعة - دمج EACO في أنظمة الأصول الواقعية" },
        { name: "1 جنيه", value: "£1.00", desc: "مرحلة الاعتراف - يصبح EACO وحدة حضارة رقمية معترف بها" },
        { name: "10-20 جنيهاً", value: "£10-20", desc: "مرحلة المؤسسات - التبني المؤسسي ودمج مؤشر ECI" },
        { name: "100-200 جنيهاً", value: "£100-200", desc: "مرحلة الاحتياطي العالمي - EACO كمعيار أصول حضاري عالمي" }
      ],
      howToAchieve: "كيف نحقق ذلك خطوة بخطوة",
      steps: [
        { phase: "المرحلة 1", title: "التأسيس والمجتمع", time: "الأشهر 1-6", desc: "بناء مجتمع عالمي، تأسيس حضور متعدد اللغات، إطلاق تطبيق موقع EACO، وإنشاء مجمعات سيولة أولية على Solana DEX." },
        { phase: "المرحلة 2", title: "المنفعة ودمج RWA", time: "الأشهر 7-12", desc: "ربط مصادر بيانات الأصول الأوروبية، بناء نموذج مؤشر ECI، إطلاق وحدات الذكاء الاصطناعي لتحليل البيانات، تأسيس شراكات مع منصات ESG الأوروبية." },
        { phase: "المرحلة 3", title: "التبني المؤسسي", time: "السنة 2", desc: "الدمج مع أطر MiCA، إطلاق منتجات RWA بمستوى مؤسسي، تحقيق إدراج في منصات من المستوى الأول." },
        { phase: "المرحلة 4", title: "أصل احتياطي عالمي", time: "السنة 3+", desc: "النشر الكامل لنموذج حضارة EACO، التبني العالمي لمؤشر ECI، اعتراف EACO كأفضل عملة AI+RWA+Web3 على الأرض." }
      ]
    },
    gdp: {
      title: "أفضل 10 دول أوروبية بالناتج المحلي",
      subtitle: "توقعات صندوق النقد 2026 - أسواق EACO المستهدفة",
      source: "المصدر: توقعات صندوق النقد الدولي للاقتصاد العالمي 2026",
      tableHeader: ["الترتيب", "الدولة", "ناتج 2026 (متوقع)", "أولوية السوق"],
      countries: [
        { rank: 1, flag: "DE", name: "ألمانيا", gdp: "5.45$ تريليون", priority: "المستوى 1" },
        { rank: 2, flag: "GB", name: "المملكة المتحدة", gdp: "4.26$ تريليون", priority: "المستوى 1 - السوق المحلي" },
        { rank: 3, flag: "FR", name: "فرنسا", gdp: "3.60$ تريليون", priority: "المستوى 1" },
        { rank: 4, flag: "IT", name: "إيطاليا", gdp: "2.74$ تريليون", priority: "المستوى 2" },
        { rank: 5, flag: "RU", name: "روسيا", gdp: "2.66$ تريليون", priority: "المستوى 2" },
        { rank: 6, flag: "ES", name: "إسبانيا", gdp: "2.09$ تريليون", priority: "المستوى 2" },
        { rank: 7, flag: "NL", name: "هولندا", gdp: "1.45$ تريليون", priority: "المستوى 3" },
        { rank: 8, flag: "CH", name: "سويسرا", gdp: "1.15$ تريليون", priority: "المستوى 3" },
        { rank: 9, flag: "PL", name: "بولندا", gdp: "1.13$ تريليون", priority: "المستوى 3" },
        { rank: 10, flag: "IE", name: "أيرلندا", gdp: "779.4$ مليار", priority: "المستوى 3" }
      ],
      insight: "أكبر ثلاث اقتصادات (ألمانيا، المملكة المتحدة، فرنسا) يتجاوز ناتجها 13 تريليون دولار. يستهدف EACO هذه الأسواق أولاً لتحقيق أقصى تأثير."
    },
    assets: {
      title: "أقوى 30 فئة من الأصول السائلة في المملكة المتحدة وأوروبا",
      subtitle: "حسب الفئة - ليست نصيحة استثمارية فردية",
      categories: [
        { icon: "B", name: "العملات والمكافئات النقدية", liquidity: "عالية جداً", color: "blue", items: ["نقد جنيه إسترليني", "نقد يورو", "سندات حكومية بريطانية/أوروبية", "صناديق سوق المال", "ودائع بنكية"] },
        { icon: "S", name: "الأسهم", liquidity: "عالية جداً", color: "green", items: ["FTSE 100 بريطاني", "STOXX 50 أوروبي", "FTSE 250 بريطاني", "DAX ألماني", "CAC 40 فرنسي"] },
        { icon: "B", name: "السندات", liquidity: "عالية", color: "purple", items: ["سندات حكومية بريطانية طويلة", "بوندات ألمانية", "سندات فرنسية OAT", "سندات شركات استثمارية أوروبية", "سندات عالية العائد أوروبية"] },
        { icon: "R", name: "العقارات", liquidity: "متوسطة-عالية", color: "orange", items: ["صناديق REIT بريطانية", "صناديق REIT أوروبية", "صناديق عقارات تجارية", "صناديق بنية تحتية"] },
        { icon: "C", name: "السلع", liquidity: "عالية", color: "amber", items: ["نفط برنت", "غاز طبيعي أوروبي", "ذهب", "فضة", "نظام تداول الكربون الأوروبي"] },
        { icon: "D", name: "الأصول الرقمية", liquidity: "عالية", color: "cyan", items: ["EACO + SOL", "بيتكوين", "إيثيريوم", "عملات مستقرة باليورو", "سندات رقمية أوروبية ممتثلة"] }
      ],
      tableTitle: "ملخص: أقوى 30 فئة من الأصول السائلة",
      table: {
        headers: ["الفئة", "السيولة", "أمثلة"],
        rows: [
          ["العملات", "عالية جداً", "جنيه إسترليني، يورو، صناديق المال"],
          ["الأسهم", "عالية جداً", "FTSE 100، DAX، STOXX 50"],
          ["السندات", "عالية", "بوندات، سندات بريطانية، OAT"],
          ["العقارات", "متوسطة-عالية", "صناديق REIT، صناديق البنية التحتية"],
          ["السلع", "عالية", "برنت، غاز طبيعي، ذهب"],
          ["الأصول الرقمية", "عالية", "EACO+SOL، BTC، ETH، عملات مستقرة"]
        ]
      }
    },
    model: {
      title: "نموذج حضارة EACO",
      subtitle: "الطاقة x المواقف x التعاون x التحسين",
      intro: "الأركان الأربعة الأساسية لـ EACO، مدمجة مع أنظمة الأصول الأوروبية لتشكيل نموذج حضاري متكامل.",
      pillars: [
        { letter: "E", name: "الطاقة", desc: "تشغيل الحضارة ببيانات الطاقة المستدامة", euroLink: "نظام تداول الكربون الأوروبي، بيانات الصناديق الخضراء الأوروبية، مؤشرات انتقال الطاقة تشكل وحدة الطاقة في EACO", color: "green" },
        { letter: "A", name: "المواقف", desc: "العقلية لبناء أفضل حضارة على الأرض", euroLink: "روح الابتكار الأوروبية، عقلية قيادة ESG، نهج الاستدامة أولاً", color: "blue" },
        { letter: "C", name: "التعاون", desc: "آليات التعاون عبر الحدود", euroLink: "إطار التعاون العابر للحدود للاتحاد الأوروبي، المعايير التنظيمية الأوروبية، معايير ESG", color: "purple" },
        { letter: "O", name: "التحسين", desc: "تحسين مستمر عبر الذكاء الاصطناعي والبيانات", euroLink: "الامتثال لقانون الذكاء الاصطناعي الأوروبي، معايير MiCA، أكثر نموذج AI+Web3 أماناً في العالم", color: "orange" }
      ],
      integrationTitle: "5 مسارات تكامل رئيسية",
      integrations: [
        { num: 1, title: "الأصول الأوروبية كمراسي RWA", desc: "تعمل الأصول الأوروبية كمصادر لبيانات الأصول الواقعية ونماذج ربط القيمة ومجموعات تدريب الذكاء الاصطناعي ومدخلات المؤشرات الاقتصادية لـ EACO." },
        { num: 2, title: "التعاون عبر أطر الاتحاد الأوروبي", desc: "يعتمد EACO آليات التعاون العابر للحدود للاتحاد الأوروبي والأطر التنظيمية ومعايير ESG وأنظمة سوق الكربون." },
        { num: 3, title: "ESG + وحدة الطاقة", desc: "دمج نظام تداول الكربون الأوروبي وبيانات الصناديق الخضراء الأوروبية ومؤشرات انتقال الطاقة لتعزيز وحدة الطاقة في EACO." },
        { num: 4, title: "الامتثال للذكاء الاصطناعي + الأصول الرقمية", desc: "الاستفادة من قانون الذكاء الاصطناعي الأوروبي وأطر MiCA لبناء أكثر نموذج AI+Web3 امتثالاً في العالم." },
        { num: 5, title: "مدخلات مؤشر الحضارة", desc: "مؤشرات الأسهم الأوروبية وعوائد السندات وأسعار الطاقة وأسعار الكربون ومؤشر ابتكار الذكاء الاصطناعي وسيولة الأصول الرقمية تغذي ECI." }
      ]
    },
    eci: {
      title: "مؤشر حضارة الأرض (ECI)",
      subtitle: "نسخة Web3 من مؤشر حضارة الأرض",
      intro: "ECI هو مؤشر مركب مبني من فئات الأصول الأوروبية، يعمل كطبقة قيمة الحضارة لـ EACO.",
      components: [
        { name: "مؤشرات الأسهم الأوروبية", weight: "20%", desc: "بيانات أداء FTSE 100 و DAX و CAC 40 و STOXX 50" },
        { name: "عوائد السندات الأوروبية", weight: "20%", desc: "منحنيات عوائد السندات البريطانية والألمانية والفرنسية" },
        { name: "أسعار الطاقة الأوروبية", weight: "15%", desc: "أسعار نفط برنت والغاز الطبيعي والكهرباء" },
        { name: "أسعار الكربون الأوروبية", weight: "15%", desc: "أسعار حصص الكربون في نظام تداول الكربون الأوروبي" },
        { name: "مؤشر ابتكار الذكاء الاصطناعي الأوروبي", weight: "15%", desc: "براءات اختراع الذكاء الاصطناعي واستثمارات البحث والتطوير ونشاط الشركات الناشئة" },
        { name: "سيولة الأصول الرقمية الأوروبية", weight: "15%", desc: "أحجام تداول BTC و ETH و EACO والسيولة" }
      ],
      formula: "ECI = 0.20 x مؤشر الأسهم + 0.20 x عائد السندات + 0.15 x الطاقة + 0.15 x الكربون + 0.15 x مؤشر الذكاء + 0.15 x السيولة الرقمية"
    },
    ai: {
      title: "هيكل وحدات الذكاء الاصطناعي EACO",
      subtitle: "أربع وحدات ذكاء اصطناعي متوافقة مع نموذج الحضارة E-A-C-O",
      modules: [
        { name: "وحدة الذكاء - الطاقة", icon: "E", desc: "معالجة بيانات الطاقة في الوقت الفعلي، تقييم ESG، تتبع البصمة الكربونية", inputs: ["مصادر أسعار نظام الكربون", "أسعار برنت/الغاز", "بيانات الطاقة الخضراء"], output: "درجة الحرارة الاقتصادية للأرض", color: "green" },
        { name: "وحدة الذكاء - المواقف", icon: "A", desc: "تحليل المشاعر، تتبع مواقف السوق، مؤشرات صحة المجتمع", inputs: ["مشاعر وسائل التواصل", "تحليل الأخبار", "مشاركة المجتمع"], output: "مؤشر مواقف الحضارة", color: "blue" },
        { name: "وحدة الذكاء - التعاون", icon: "C", desc: "مراقبة التعاون عبر الحدود، تتبع الامتثال التنظيمي", inputs: ["مصادر تنظيمية أوروبية", "بيانات التجارة عبر الحدود", "درجات امتثال ESG"], output: "درجة صحة التعاون", color: "purple" },
        { name: "وحدة الذكاء - التحسين", icon: "O", desc: "تحسين مستمر للنموذج، إدارة المخاطر، تحليل تنبؤي", inputs: ["بيانات امتثال MiCA", "توافق قانون الذكاء الاصطناعي", "مؤشرات مخاطر السوق"], output: "توصيات التحسين", color: "orange" }
      ],
      flowTitle: "هيكل تدفق بيانات الذكاء الاصطناعي",
      flow: ["استيعاب البيانات", "المعالجة المسبقة والتحقق", "تدريب نموذج الذكاء الاصطناعي", "حساب مؤشر الحضارة", "ربط القيمة على السلسلة", "انعكاس قيمة رمز EACO"]
    },
    roadmap: {
      title: "خارطة طريق تطوير EACO",
      subtitle: "من تكامل البيانات إلى أصل حضاري عالمي",
      threeStepTitle: "خارطة طريق استراتيجية من 3 خطوات",
      threeSteps: [
        { step: "الخطوة 1", title: "تكامل البيانات", time: "الأسهل - فوري", desc: "ربط مؤشرات الأسهم الأوروبية وعوائد السندات وأسعار الكربون وأسعار الطاقة لتشكيل طبقة بيانات الحضارة لـ EACO.", layer: "طبقة بيانات الحضارة" },
        { step: "الخطوة 2", title: "تدريب نموذج الذكاء الاصطناعي", time: "متوسط المدى", desc: "تدريب وحدة الطاقة ببيانات ESG ووحدة التعاون بأطر الاتحاد الأوروبي ووحدة التحسين بالأنظمة التنظيمية لتشكيل طبقة الذكاء الاصطناعي الحضارية لـ EACO.", layer: "طبقة الذكاء الاصطناعي الحضارية" },
        { step: "الخطوة 3", title: "ربط قيمة Web3", time: "طويل المدى", desc: "ربط فئات الأصول الأوروبية بمؤشر قيمة الحضارة لـ EACO، وتشكيل نموذج ربط الحضارة العالمي Earth E (EACO).", layer: "طبقة أصول الحضارة العالمية" }
      ],
      twelveMonthTitle: "خارطة طريق تطوير 12 شهراً",
      months: [
        { month: "M1-M2", title: "إطلاق الموقع والمجتمع", desc: "إطلاق موقع متعدد اللغات، تأسيس قنوات مجتمع عالمية، سيولة DEX أولية على Solana" },
        { month: "M3-M4", title: "تكامل مصادر البيانات", desc: "دمج واجهات أسعار الأسهم/السندات/الطاقة/الكربون الأوروبية، بناء خط أنابيب بيانات ECI" },
        { month: "M5-M6", title: "نموذج مؤشر ECI", desc: "إطلاق نموذج مؤشر ECI، نشر الورقة البيضاء v1.0، بدء تطوير وحدات الذكاء الاصطناعي" },
        { month: "M7-M8", title: "نسخة تجريبية لوحدات الذكاء", desc: "نشر وحدات الذكاء-الطاقة والذكاء-التعاون، الشراكة مع مزودي بيانات ESG" },
        { month: "M9-M10", title: "إطلاق منتجات RWA", desc: "إطلاق منتجات مدعومة بـ RWA، تجهيز امتثال MiCA، طلبات الإدراج في البورصات" },
        { month: "M11-M12", title: "نظام بيئي كامل", desc: "نشر كامل لوحدات الذكاء الاصطناعي، مؤشر ECI مباشر، شراكات مؤسسية، توسع عالمي" }
      ]
    },
    whitepaper: {
      title: "هيكل الورقة البيضاء EACO",
      subtitle: "إطار ورقة بيضاء كاملة لـ EACO x الأصول الأوروبية",
      sections: [
        { num: "1", title: "الملخص التنفيذي", desc: "رؤية ورسالة وقيمة EACO كأفضل عملة على وجه الأرض" },
        { num: "2", title: "نموذج حضارة EACO", desc: "إطار الطاقة x المواقف x التعاون x التحسين التفصيلي" },
        { num: "3", title: "مشهد الأصول الأوروبية", desc: "أفضل 10 دول بالناتج المحلي، 30 فئة أصول سائلة، تحليل السوق" },
        { num: "4", title: "مؤشر حضارة الأرض ECI", desc: "بناء المؤشر، منهجية الترجيح، مصادر البيانات" },
        { num: "5", title: "تصميم وحدات الذكاء الاصطناعي", desc: "هيكل أربع وحدات ذكاء اصطناعي، منهجية التدريب، خطة النشر" },
        { num: "6", title: "إطار تكامل RWA", desc: "رمزية الأصول الواقعية، ربط الأصول الأوروبية، الامتثال" },
        { num: "7", title: "هيكل Web3", desc: "بلوكشين Solana، العقود الذكية، اقتصاد الرموز، الحوكمة" },
        { num: "8", title: "الامتثال التنظيمي", desc: "مواءمة MiCA، امتثال قانون الذكاء الاصطناعي الأوروبي، إطار قانوني عبر الحدود" },
        { num: "9", title: "خارطة الطريق والمعالم", desc: "خارطة طريق استراتيجية من 3 خطوات، خطة تطوير 12 شهراً، رؤية طويلة المدى" },
        { num: "10", title: "اقتصاد الرموز وأهداف السعر", desc: "توزيع الرموز، نموذج المنفعة، استراتيجية معالم السعر" },
        { num: "11", title: "تحليل المخاطر", desc: "مخاطر السوق، المخاطر التنظيمية، المخاطر التقنية، استراتيجيات التخفيف" },
        { num: "12", title: "الخلاصة والرؤية", desc: "EACO كأفضل عملة حضارة ذكاء اصطناعي + RWA + Web3 على الأرض" }
      ]
    },
    web3: {
      title: "أفضل 10 دول أوروبية صديقة لـ Web3",
      subtitle: "مجموعة أوروبا EACO - الأسواق الرئيسية لاعتماد Web3 والعملات المشفرة",
      tableHeader: ["الترتيب", "الدولة", "المزايا الرئيسية والأدلة"],
      countries: [
        { rank: 1, flag: "DE", name: "ألمانيا", advantage: "مركز الامتثال والرائد في البنية التحتية المالية. تمتلك أكبر عدد من تراخيص MiCA في الاتحاد الأوروبي (57)، أي ما يقارب ربع الإجمالي. دمجت العملات المشفرة في أطر مالية راسخة قبل MiCA، مما يوفر مساراً واضحاً للشركات المنظمة." },
        { rank: 2, flag: "CH", name: "سويسرا", advantage: "“وادي العملات المشفرة” ومركز الابتكار. وادي العملات المشفرة في تسوغ هو أحد أقدم تجمعات صناعة البلوك تشين في العالم. إطار تنظيمي واضح وداعم، يجذب أكثر من 900 شركة مشفرة مسجلة." },
        { rank: 3, flag: "FR", name: "فرنسا", advantage: "دفع استراتيجي حكومي. حصلت على 26 ترخيص MiCA، المرتبة الثانية في الاتحاد الأوروبي. حددت الحكومة البلوك تشين كقطاع رئيسي عبر خطة “فرنسا 2030”، مما يدفع تنفيذ Web3." },
        { rank: 4, flag: "LU", name: "لوكسمبورغ", advantage: "مركز مالي مؤسسي. نظام مالي مستقر (تصنيف AAA)، نظام بيئي ضخم للصناديق (حوالي 8.29 تريليون يورو). اختارتها Coinbase وغيرها كمركز أوروبي لعمليات MiCA." },
        { rank: 5, flag: "MT", name: "مالطا", advantage: "“جزيرة البلوك تشين”. أصدرت تشريعات البلوك تشين منذ عام 2018، واحدة من أوؤل الدول الأوروبية التي توفر إطاراً قانونياً شاملاً للعملات المشفرة. يتوافق إطار VFA المحلي بشكل وثيق مع MiCA." },
        { rank: 6, flag: "EE", name: "إستونيا", advantage: "رائد الحكومة الرقمية. برنامج فريد للإقامة الإلكترونية ونظام هوية رقمية ناضج. رغم تشديد اللوائح، لا يزال الإطار جذاباً للشركات المشفرة." },
        { rank: 7, flag: "NL", name: "هولندا", advantage: "أجواء مفتوحة للتكنولوجيا والابتكار. أصبحت أمستردام عقدة مهمة لـ DeFi و DePIN. مناخها التجاري المفتوح يجذب عدداً كبيراً من الشركات الناشئة Web3." },
        { rank: 8, flag: "IT", name: "إيطاليا", advantage: "نشاط سوقي عالٍ. تصل إلى نتائج جيدة في تصنيفات الصداقة المشفرة العالمية، مع قبول متميز لمدفوعات العملات المشفرة. تضم أكثر من 73 مزود خدمة مشفر مسجلاً." },
        { rank: 9, flag: "PT", name: "البرتغال", advantage: "مزايا ضريبية (تخضع لسياسات جديدة). كانت سابقاً “ملاذًا للمهاجرين الرقميين” مع إعفاء ضريبي على أرباح رأس المال المشفر، رغم أن هذه الميزة تتراجع. حالياً في مرحلة انتقالية." },
        { rank: 10, flag: "IE", name: "أيرلندا", advantage: "مركز للأصول المالية. مع ألمانيا وفرنسا وهولندا ولوكسمبورغ، تركز حوالي 72% من الأصول المالية للاتحاد الأوروبي. كمركز مالي دولي، أصبحت بوابة مهمة للشركات المشفرة." }
      ],
      trendTitle: "تحليل الاتجاهات الرئيسية",
      trend: "أكبر متغير في تطور Web3 الأوروبي هو التنفيذ الكامل لـ MiCA. بمجرد تطبيقه بالكامل في عام 2026، تصبح قدرة الامتثال عاملاً تنافسياً رئيسياً. ألمانيا وفرنسا ولوكسمبورغ وغيرها من يمتلك قوة مالية ومسارات تنظيمية واضحة هم الفائزون الرئيسيون.",
      ukNote: "لم تدخل المملكة المتحدة ضمن العشرة الأوائل. رغم أن لندن تتمتع بمجتمع مشفر نشط، إلا أن درجات الوضوح التنظيمي والملائمة التجارية أقل من الدول المذكورة. — مجموعة أوروبا EACO"
    },

    footer: {
      disclaimer: "EACO هو مشروع نموذج حضارة ذكاء اصطناعي + RWA + Web3. هذا ليس نصيحة مالية. جميع أهداف السعر هي معالم طموحة.",
      rights: "جميع الحقوق محفوظة.",
      links: "روابط سريعة",
      community: "المجتمع"
    }
  },

  // ============================================================
  // RUSSIAN
  // ============================================================
  ru: {
    _meta: { name: "Русский", flag: "RU", dir: "ltr" },
    nav: {
      home: "Главная",
      price: "Цели Цены",
      gdp: "ВВП Европы",
      assets: "Ликвидные Активы",
      model: "Модель Цивилизации",
      eci: "Индекс ECI",
      ai: "ИИ Модули",
      roadmap: "Дорожная Карта",
      whitepaper: "Белая Книга",
      web3: "Страны Web3"
    },
    hero: {
      title: "Лучшая Монета Земли",
      subtitle: "Модель Цивилизации ИИ + RWA + Web3",
      tagline: "Энергия x Отношение x Сотрудничество x Оптимизация",
      cta: "Исследовать EACO",
      contract: "Адрес Контракта",
      website: "Официальный Сайт"
    },
    price: {
      title: "Цели Цены EACO",
      subtitle: "Поэтапные этапы стоимости от пенса до премиума",
      stages: [
        { name: "1 Пенс Фунт", value: "L0.01", desc: "Фаза строительства сообщества - установление внедрения и осведомленности" },
        { name: "1 Дайм Фунт", value: "L0.10", desc: "Фаза полезности - EACO интегрирован в экосистемы реальных активов" },
        { name: "1 Фунт", value: "L1.00", desc: "Фаза признания - EACO становится признанной единицей цифровой цивилизации" },
        { name: "10-20 Фунтов", value: "L10-20", desc: "Институциональная фаза - институциональное внедрение и интеграция индекса ECI" },
        { name: "100-200 Фунтов", value: "L100-200", desc: "Фаза глобального резерва - EACO как стандарт актива глобальной цивилизации" }
      ],
      howToAchieve: "Как Достичь Этого Шаг за Шагом",
      steps: [
        { phase: "Фаза 1", title: "Фундамент и Сообщество", time: "Месяцы 1-6", desc: "Создание глобального сообщества, многоязычное присутствие, запуск веб-приложения EACO и создание пулов начальной ликвидности на Solana DEX." },
        { phase: "Фаза 2", title: "Полезность и Интеграция RWA", time: "Месяцы 7-12", desc: "Подключение источников данных европейских активов, создание прототипа индекса ECI, запуск модулей ИИ для анализа данных, партнерство с европейскими ESG платформами." },
        { phase: "Фаза 3", title: "Институциональное Внедрение", time: "Год 2", desc: "Интеграция с MiCA-совместимыми фреймворками, запуск институциональных RWA продуктов, листинг на платформах первого уровня." },
        { phase: "Фаза 4", title: "Глобальный Резервный Актив", time: "Год 3+", desc: "Полное развертывание модели цивилизации EACO, глобальное внедрение индекса ECI, EACO признан лучшей ИИ+RWA+Web3 монетой земли." }
      ]
    },
    gdp: {
      title: "Топ 10 Стран Европы по ВВП",
      subtitle: "Прогноз МВФ 2026 - Целевые Рынки EACO",
      source: "Источник: МВФ Перспективы Мировой Экономики 2026",
      tableHeader: ["Ранг", "Страна", "ВВП 2026 (Прогноз)", "Приоритет Рынка"],
      countries: [
        { rank: 1, flag: "DE", name: "Германия", gdp: "$5.45T", priority: "Уровень 1" },
        { rank: 2, flag: "GB", name: "Великобритания", gdp: "$4.26T", priority: "Уровень 1 - Домашний Рынок" },
        { rank: 3, flag: "FR", name: "Франция", gdp: "$3.60T", priority: "Уровень 1" },
        { rank: 4, flag: "IT", name: "Италия", gdp: "$2.74T", priority: "Уровень 2" },
        { rank: 5, flag: "RU", name: "Россия", gdp: "$2.66T", priority: "Уровень 2" },
        { rank: 6, flag: "ES", name: "Испания", gdp: "$2.09T", priority: "Уровень 2" },
        { rank: 7, flag: "NL", name: "Нидерланды", gdp: "$1.45T", priority: "Уровень 3" },
        { rank: 8, flag: "CH", name: "Швейцария", gdp: "$1.15T", priority: "Уровень 3" },
        { rank: 9, flag: "PL", name: "Польша", gdp: "$1.13T", priority: "Уровень 3" },
        { rank: 10, flag: "IE", name: "Ирландия", gdp: "$779.4B", priority: "Уровень 3" }
      ],
      insight: "Топ-3 экономики (Германия, Великобритания, Франция) в сумме превышают $13 триллионов ВВП. EACO нацелен на эти рынки в первую очередь для максимального эффекта."
    },
    assets: {
      title: "30 Самых Сильных Классов Ликвидных Активов Великобритании и Европы",
      subtitle: "По категориям - не индивидуальная инвестиционная рекомендация",
      categories: [
        { icon: "B", name: "Валюта и Эквиваленты Наличных", liquidity: "Очень Высокая", color: "blue", items: ["Наличные GBP", "Наличные EUR", "UK Gilts / EU T-Bills", "Фонды Денежного Рынка", "Банковские Депозиты"] },
        { icon: "S", name: "Акции", liquidity: "Очень Высокая", color: "green", items: ["UK FTSE 100", "EU STOXX 50", "UK FTSE 250", "Немецкий DAX", "Французский CAC 40"] },
        { icon: "B", name: "Облигации", liquidity: "Высокая", color: "purple", items: ["UK Gilts (Долгосрочные)", "Немецкие Bunds", "Французские OAT", "Инвестиционные Корп. Облигации ЕС", "Высокодоходные Облигации ЕС"] },
        { icon: "R", name: "Недвижимость", liquidity: "Средне-Высокая", color: "orange", items: ["UK REITs", "Европейские REITs", "Фонды Коммерческой Недвижимости", "Инфраструктурные Фонды"] },
        { icon: "C", name: "Сырье", liquidity: "Высокая", color: "amber", items: ["Нефть Brent", "Европейский Газ", "Золото", "Серебро", "EU Углерод ETS"] },
        { icon: "D", name: "Цифровые Активы", liquidity: "Высокая", color: "cyan", items: ["EACO + SOL", "Bitcoin", "Ethereum", "EUR Стейблкоины", "Цифровые Облигации ЕС"] }
      ],
      tableTitle: "Итог: 30 Самых Сильных Классов Ликвидных Активов",
      table: {
        headers: ["Категория", "Ликвидность", "Примеры"],
        rows: [
          ["Валюта", "Очень Высокая", "GBP, EUR, Фонды Денежного Рынка"],
          ["Акции", "Очень Высокая", "FTSE 100, DAX, STOXX 50"],
          ["Облигации", "Высокая", "Bunds, Gilts, OAT"],
          ["Недвижимость", "Средне-Высокая", "REITs, Инфраструктурные Фонды"],
          ["Сырье", "Высокая", "Brent, Газ, Золото"],
          ["Цифровые Активы", "Высокая", "EACO+SOL, BTC, ETH, Стейблкоины"]
        ]
      }
    },
    model: {
      title: "Модель Цивилизации EACO",
      subtitle: "Энергия x Отношение x Сотрудничество x Оптимизация",
      intro: "Четыре основных столпа EACO, интегрированные с европейскими системами активов для формирования взаимодополняющей модели цивилизации.",
      pillars: [
        { letter: "E", name: "Энергия", desc: "Питание цивилизации данными устойчивой энергетики", euroLink: "EU ETS, данные европейских зеленых фондов, индикаторы энергетического перехода формируют модуль Энергии EACO", color: "green" },
        { letter: "A", name: "Отношение", desc: "Мышление построения лучшей цивилизации Земли", euroLink: "Европейский дух инноваций, менталитет лидерства ESG, подход устойчивости прежде всего", color: "blue" },
        { letter: "C", name: "Сотрудничество", desc: "Механизмы трансграничного сотрудничества", euroLink: "Рамки транснационального сотрудничества ЕС, европейские регуляторные стандарты, бенчмарки ESG", color: "purple" },
        { letter: "O", name: "Оптимизация", desc: "Непрерывное улучшение через ИИ и данные", euroLink: "Соответствие EU AI Act, стандарты MiCA, самая безопасная модель ИИ+Web3 в мире", color: "orange" }
      ],
      integrationTitle: "5 Основных Путей Интеграции",
      integrations: [
        { num: 1, title: "Европейские Активы как Якоря RWA", desc: "Европейские активы служат источниками данных реальных активов, моделями привязки стоимости, обучающими наборами ИИ и входами экономических индикаторов для EACO." },
        { num: 2, title: "Сотрудничество через Рамки ЕС", desc: "EACO принимает механизмы транснационального сотрудничества ЕС, регуляторные рамки, стандарты ESG и системы углеродного рынка." },
        { num: 3, title: "ESG + Модуль Энергии", desc: "Интеграция EU ETS, данных зеленых фондов и индикаторов энергетического перехода для усиления модуля Энергии EACO." },
        { num: 4, title: "Соответствие ИИ + Цифровые Активы", desc: "Использование EU AI Act и рамок MiCA для создания самой соответствующей модели ИИ+Web3 в мире." },
        { num: 5, title: "Входы Индекса Цивилизации", desc: "Европейские фондовые индексы, доходности облигаций, цены на энергию, цены на углерод, индекс инноваций ИИ и ликвидность цифровых активов питают ECI." }
      ]
    },
    eci: {
      title: "Индекс Цивилизации Земли (ECI)",
      subtitle: "Web3 версия индекса цивилизации Земли",
      intro: "ECI - это составной индекс, построенный из категорий европейских активов, служащий слоем стоимости цивилизации EACO.",
      components: [
        { name: "Европейские Фондовые Индексы", weight: "20%", desc: "Данные производительности FTSE 100, DAX, CAC 40, STOXX 50" },
        { name: "Доходности Европейских Облигаций", weight: "20%", desc: "Кривые доходности UK Gilts, немецких Bunds, французских OAT" },
        { name: "Цены на Европейскую Энергию", weight: "15%", desc: "Цены на нефть Brent, природный газ, электричество" },
        { name: "Цены на Углерод ЕС", weight: "15%", desc: "Цены квот на углерод EU ETS" },
        { name: "Европейский Индекс Инноваций ИИ", weight: "15%", desc: "Патенты ИИ, инвестиции в НИОКР, активность стартапов" },
        { name: "Ликвидность Европейских Цифровых Активов", weight: "15%", desc: "Объемы торгов и ликвидность BTC, ETH, EACO" }
      ],
      formula: "ECI = 0.20 x ФондовыйИндекс + 0.20 x ДоходностьОблигаций + 0.15 x Энергия + 0.15 x Углерод + 0.15 x ИндексИИ + 0.15 x ЦифроваяЛиквидность"
    },
    ai: {
      title: "Архитектура ИИ Модулей EACO",
      subtitle: "Четыре ИИ модуля, согласованные с моделью цивилизации E-A-C-O",
      modules: [
        { name: "ИИ-Модуль Энергии", icon: "E", desc: "Обработка энергетических данных в реальном времени, оценка ESG, отслеживание углеродного следа", inputs: ["Потоки цен EU ETS", "Цены Brent/Газ", "Данные зеленой энергии"], output: "Оценка Экономической Температуры Земли", color: "green" },
        { name: "ИИ-Модуль Отношения", icon: "A", desc: "Анализ тональности, отслеживание рыночных настроений, метрики здоровья сообщества", inputs: ["Тональность соцсетей", "Анализ новостей", "Вовлеченность сообщества"], output: "Индекс Отношения Цивилизации", color: "blue" },
        { name: "ИИ-Модуль Сотрудничества", icon: "C", desc: "Мониторинг трансграничного сотрудничества, отслеживание регуляторного соответствия", inputs: ["Регуляторные потоки ЕС", "Данные трансграничной торговли", "Оценки соответствия ESG"], output: "Оценка Здоровья Сотрудничества", color: "purple" },
        { name: "ИИ-Модуль Оптимизации", icon: "O", desc: "Непрерывная оптимизация модели, управление рисками, предиктивная аналитика", inputs: ["Данные соответствия MiCA", "Выравнивание AI Act", "Индикаторы рыночного риска"], output: "Рекомендации по Оптимизации", color: "orange" }
      ],
      flowTitle: "Архитектура Потока Данных ИИ",
      flow: ["Прием Данных", "Предобработка и Валидация", "Обучение Модели ИИ", "Вычисление Индекса Цивилизации", "Привязка Стоимости On-chain", "Отражение Стоимости Токена EACO"]
    },
    roadmap: {
      title: "Дорожная Карта Развития EACO",
      subtitle: "От интеграции данных к глобальному активу цивилизации",
      threeStepTitle: "Стратегическая Дорожная Карта из 3 Шагов",
      threeSteps: [
        { step: "Шаг 1", title: "Интеграция Данных", time: "Проще всего - Немедленно", desc: "Подключение европейских фондовых индексов, доходностей облигаций, цен на углерод и энергию для формирования Слоя Данных Цивилизации EACO.", layer: "Слой Данных Цивилизации" },
        { step: "Шаг 2", title: "Обучение Модели ИИ", time: "Среднесрочно", desc: "Обучение модуля Энергии данными ESG, модуля Сотрудничества рамками ЕС, модуля Оптимизации регуляторными системами для формирования Слоя ИИ Цивилизации EACO.", layer: "Слой ИИ Цивилизации" },
        { step: "Шаг 3", title: "Привязка Стоимости Web3", time: "Долгосрочно", desc: "Отображение категорий европейских активов на индекс стоимости цивилизации EACO, формирование модели глобальной цивилизационной привязки Earth E (EACO).", layer: "Слой Глобальных Активов Цивилизации" }
      ],
      twelveMonthTitle: "Дорожная Карта Развития на 12 Месяцев",
      months: [
        { month: "M1-M2", title: "Запуск Сайта и Сообщества", desc: "Запуск многоязычного сайта, создание глобальных каналов сообщества, начальная ликвидность DEX на Solana" },
        { month: "M3-M4", title: "Интеграция Источников Данных", desc: "Интеграция API цен европейских акций/облигаций/энергии/углерода, создание конвейера данных ECI" },
        { month: "M5-M6", title: "Прототип Индекса ECI", desc: "Запуск прототипа индекса ECI, публикация белой книги v1.0, начало разработки ИИ модулей" },
        { month: "M7-M8", title: "Бета ИИ Модулей", desc: "Развертывание модулей ИИ-Энергия и ИИ-Сотрудничество, партнерство с поставщиками ESG данных" },
        { month: "M9-M10", title: "Запуск RWA Продуктов", desc: "Запуск продуктов на базе RWA, подготовка соответствия MiCA, подача заявок на листинг" },
        { month: "M11-M12", title: "Полная Экосистема", desc: "Полное развертывание ИИ модулей, запуск индекса ECI, институциональные партнерства, глобальное расширение" }
      ]
    },
    whitepaper: {
      title: "Структура Белой Книги EACO",
      subtitle: "Полный каркас белой книги для EACO x Европейские Активы",
      sections: [
        { num: "1", title: "Исполнительное Резюме", desc: "Видение, миссия и ценностное предложение EACO как Лучшей Монеты Земли" },
        { num: "2", title: "Модель Цивилизации EACO", desc: "Подробный каркас Энергия x Отношение x Сотрудничество x Оптимизация" },
        { num: "3", title: "Ландшафт Европейских Активов", desc: "Топ 10 стран по ВВП, 30 классов ликвидных активов, анализ рынка" },
        { num: "4", title: "Индекс Цивилизации Земли ECI", desc: "Построение индекса, методология взвешивания, источники данных" },
        { num: "5", title: "Дизайн ИИ Модулей", desc: "Архитектура четырех ИИ модулей, методология обучения, план развертывания" },
        { num: "6", title: "Каркас Интеграции RWA", desc: "Токенизация реальных активов, привязка европейских активов, соответствие" },
        { num: "7", title: "Архитектура Web3", desc: "Блокчейн Solana, смарт-контракты, токеномика, управление" },
        { num: "8", title: "Регуляторное Соответствие", desc: "Выравнивание MiCA, соответствие EU AI Act, трансграничная правовая рамка" },
        { num: "9", title: "Дорожная Карта и Вехи", desc: "Стратегическая дорожная карта из 3 шагов, план развития на 12 месяцев, долгосрочное видение" },
        { num: "10", title: "Токеномика и Цели Цены", desc: "Распределение токенов, модель полезности, стратегия ценовых вех" },
        { num: "11", title: "Анализ Рисков", desc: "Рыночные риски, регуляторные риски, технические риски, стратегии смягчения" },
        { num: "12", title: "Заключение и Видение", desc: "EACO как лучшая монета цивилизации ИИ+RWA+Web3 земли" }
      ]
    },
    web3: {
      title: "Топ 10 европейских стран, благоприятных для Web3",
      subtitle: "Группа Европа EACO - Ключевые рынки для внедрения Web3 и крипто",
      tableHeader: ["Ранг", "Страна", "Ключевые преимущества и обоснование"],
      countries: [
        { rank: 1, flag: "DE", name: "Германия", advantage: "Центр соответствия и лидер финансовой инфраструктуры. Имеет больше всего лицензий MiCA в ЕС (57), почти четверть от общего числа. Интегрировала крипто в устоявшиеся финансовые рамки до MiCA, обеспечивая четкий путь для регулируемых крипто-компаний." },
        { rank: 2, flag: "CH", name: "Швейцария", advantage: "“Крипто-долина” и центр инноваций. Крипто-долина в Цуге - один из первых блокчейн-кластеров в мире. Четкая и поддерживающая регуляторная база, привлекшая более 900 зарегистрированных крипто-компаний." },
        { rank: 3, flag: "FR", name: "Франция", advantage: "Стратегический толчок правительства. Получила 26 лицензий MiCA, второе место в ЕС. Правительство определило блокчейн как ключевую область через план “Франция 2030”, активно продвигая внедрение Web3." },
        { rank: 4, flag: "LU", name: "Люксембург", advantage: "Институциональный финансовый центр. Стабильная финансовая система (рейтинг AAA), огромная экосистема фондов (ок. 8,29 трлн евро). Coinbase и другие гиганты выбрали его как европейский центр операций MiCA." },
        { rank: 5, flag: "MT", name: "Мальта", advantage: "“Остров блокчейна”. Приняла блокчейн-законодательство еще в 2018 году, одна из первых европейских стран с всеобъемлющей правовой базой для крипто. Ее рамка VFA тесно согласуется с MiCA." },
        { rank: 6, flag: "EE", name: "Эстония", advantage: "Пионер цифрового правительства. Уникальная программа e-Residency и зрелая система цифровой идентификации. Хотя регулирование ужесточилось, рамка остается привлекательной для крипто-компаний." },
        { rank: 7, flag: "NL", name: "Нидерланды", advantage: "Открытая атмосфера технологий и инноваций. Амстердам стал важным узлом для DeFi и DePIN. Открытый деловой климат привлек множество Web3-стартапов." },
        { rank: 8, flag: "IT", name: "Италия", advantage: "Высокая рыночная активность. Высокие баллы в мировых рейтингах крипто-дружественности, выдающийся показатель принятия крипто-платежей. Уже более 73 зарегистрированных крипто-провайдеров." },
        { rank: 9, flag: "PT", name: "Португалия", advantage: "Налоговые преимущества (зависят от новых политик). Ранее “рай для цифровых кочевников” с не облагаемым приростом капитала от крипто, хотя это преимущество уменьшается. В настоящее время в переходной фазе." },
        { rank: 10, flag: "IE", name: "Ирландия", advantage: "Центр финансовых активов. Вместе с Германией, Францией, Нидерландами и Люксембургом концентрирует около 72% финансовых активов ЕС. Как традиционный международный финансовый центр, становится важным шлюзом для крипто-компаний." }
      ],
      trendTitle: "Анализ ключевых тенденций",
      trend: "Главной переменной в европейском развитии Web3 является полная реализация MiCA. После полного вступления в силу в 2026 году, способность к соблюдению требований становится ключевым конкурентным фактором. Германия, Франция, Люксембург и другие страны с сильной финансовой базой и четкими регуляторными путями становятся главными победителями.",
      ukNote: "Великобритания не вошла в десятку. Хотя в Лондоне активное крипто-сообщество, его оценки по четкости регулирования и дружественности к бизнесу ниже, чем у перечисленных стран. — Группа Европа EACO"
    },

    footer: {
      disclaimer: "EACO - это проект модели цивилизации ИИ+RWA+Web3. Это не финансовая рекомендация. Все цели цены являются устремленными вехами.",
      rights: "Все права защищены.",
      links: "Быстрые Ссылки",
      community: "Сообщество"
    }
  },

  // ============================================================
  // GERMAN
  // ============================================================
  de: {
    _meta: { name: "Deutsch", flag: "DE", dir: "ltr" },
    nav: {
      home: "Startseite",
      price: "Preisziele",
      gdp: "Europa BIP",
      assets: "Liquiditaet",
      model: "Zivilisationsmodell",
      eci: "ECI Index",
      ai: "KI Module",
      roadmap: "Fahrplan",
      whitepaper: "Whitepaper",
      web3: "Web3 Laender"
    },
    hero: {
      title: "Earth's Best Coin",
      subtitle: "KI + RWA + Web3 Zivilisationsmodell",
      tagline: "Energie x Einstellung x Zusammenarbeit x Optimierung",
      cta: "EACO entdecken",
      contract: "Vertragsadresse",
      website: "Offizielle Website"
    },
    price: {
      title: "EACO Preisziele",
      subtitle: "Schrittweise Wertmeilensteine vom Penny bis Premium",
      stages: [
        { name: "1 Penny Pfund", value: "L0.01", desc: "Community-Aufbauphase - Etablierung von Akzeptanz und Bekanntheit" },
        { name: "1 Dime Pfund", value: "L0.10", desc: "Nutzenphase - EACO in realwirtschaftliche Anlageoekosysteme integriert" },
        { name: "1 Pfund", value: "L1.00", desc: "Anerkennungsphase - EACO wird als anerkannte digitale Zivilisationseinheit etabliert" },
        { name: "10-20 Pfund", value: "L10-20", desc: "Institutionelle Phase - institutionelle Akzeptanz und ECI-Index-Integration" },
        { name: "100-200 Pfund", value: "L100-200", desc: "Globale Reservephase - EACO als globaler Zivilisations-Asset-Standard" }
      ],
      howToAchieve: "Wie man dies schrittweise erreicht",
      steps: [
        { phase: "Phase 1", title: "Grundlagen und Community", time: "Monate 1-6", desc: "Aufbau einer globalen Community, mehrsprachige Praesenz, Start der EACO-Web-App und Erstellung erster Liquiditaetspools auf Solana DEX." },
        { phase: "Phase 2", title: "Nutzen und RWA-Integration", time: "Monate 7-12", desc: "Anbindung europaeischer Anlage-Datenquellen, Bau eines ECI-Index-Prototyps, Start von KI-Modulen zur Datenanalyse und Partnerschaften mit europaeischen ESG-Plattformen." },
        { phase: "Phase 3", title: "Institutionelle Akzeptanz", time: "Jahr 2", desc: "Integration mit MiCA-konformen Rahmen, Start institutioneller RWA-Produkte, Boersenlistings auf Tier-1-Plattformen." },
        { phase: "Phase 4", title: "Globales Reserve-Asset", time: "Jahr 3+", desc: "Volle Bereitstellung des EACO-Zivilisationsmodells, globale ECI-Index-Akzeptanz, EACO als beste KI+RWA+Web3-Muenze der Erde." }
      ]
    },
    gdp: {
      title: "Top 10 Europaeische Laender nach BIP",
      subtitle: "IWF 2026 Prognose - EACO Zielmaerkte",
      source: "Quelle: IWF World Economic Outlook 2026",
      tableHeader: ["Rang", "Land", "BIP 2026 (Prognose)", "Marktprioritaet"],
      countries: [
        { rank: 1, flag: "DE", name: "Deutschland", gdp: "$5.45B", priority: "Stufe 1" },
        { rank: 2, flag: "GB", name: "Vereinigtes Koenigreich", gdp: "$4.26B", priority: "Stufe 1 - Heimatmarkt" },
        { rank: 3, flag: "FR", name: "Frankreich", gdp: "$3.60B", priority: "Stufe 1" },
        { rank: 4, flag: "IT", name: "Italien", gdp: "$2.74B", priority: "Stufe 2" },
        { rank: 5, flag: "RU", name: "Russland", gdp: "$2.66B", priority: "Stufe 2" },
        { rank: 6, flag: "ES", name: "Spanien", gdp: "$2.09B", priority: "Stufe 2" },
        { rank: 7, flag: "NL", name: "Niederlande", gdp: "$1.45B", priority: "Stufe 3" },
        { rank: 8, flag: "CH", name: "Schweiz", gdp: "$1.15B", priority: "Stufe 3" },
        { rank: 9, flag: "PL", name: "Polen", gdp: "$1.13B", priority: "Stufe 3" },
        { rank: 10, flag: "IE", name: "Irland", gdp: "$779.4Mrd", priority: "Stufe 3" }
      ],
      insight: "Die Top-3-Wirtschaften (Deutschland, Grossbritannien, Frankreich) haben zusammen ueber 13 Billionen Dollar BIP. EACO zielt zuerst auf diese Maerkte ab, um maximale Wirkung zu erzielen."
    },
    assets: {
      title: "Die 30 staerksten liquiden Anlageklassen Grossbritanniens und Europas",
      subtitle: "Nach Kategorie - keine individuelle Anlageberatung",
      categories: [
        { icon: "B", name: "Waehrung und Cash-Aequivalente", liquidity: "Sehr Hoch", color: "blue", items: ["GBP Bargeld", "EUR Bargeld", "UK Gilts / EU T-Bills", "Geldmarktfonds", "Bankeinlagen"] },
        { icon: "S", name: "Aktien", liquidity: "Sehr Hoch", color: "green", items: ["UK FTSE 100", "EU STOXX 50", "UK FTSE 250", "Deutscher DAX", "Franzoesischer CAC 40"] },
        { icon: "B", name: "Anleihen", liquidity: "Hoch", color: "purple", items: ["UK Gilts (Langfristig)", "Deutsche Bunds", "Franzoesische OAT", "EU Investitionsgrade-Anleihen", "EU High-Yield-Anleihen"] },
        { icon: "R", name: "Immobilien", liquidity: "Mittel-Hoch", color: "orange", items: ["UK REITs", "Europaeische REITs", "Gewerbeimmobilienfonds", "Infrastrukturfonds"] },
        { icon: "C", name: "Rohstoffe", liquidity: "Hoch", color: "amber", items: ["Brent-Oel", "Europaeisches Erdgas", "Gold", "Silber", "EU Carbon ETS"] },
        { icon: "D", name: "Digitale Vermoegenswerte", liquidity: "Hoch", color: "cyan", items: ["EACO + SOL", "Bitcoin", "Ethereum", "EUR Stablecoins", "EU-konforme digitale Anleihen"] }
      ],
      tableTitle: "Zusammenfassung: 30 staerkste liquide Anlageklassen",
      table: {
        headers: ["Kategorie", "Liquiditaet", "Beispiele"],
        rows: [
          ["Waehrung", "Sehr Hoch", "GBP, EUR, Geldmarktfonds"],
          ["Aktien", "Sehr Hoch", "FTSE 100, DAX, STOXX 50"],
          ["Anleihen", "Hoch", "Bunds, Gilts, OAT"],
          ["Immobilien", "Mittel-Hoch", "REITs, Infrastrukturfonds"],
          ["Rohstoffe", "Hoch", "Brent, Erdgas, Gold"],
          ["Digitale Vermoegenswerte", "Hoch", "EACO+SOL, BTC, ETH, Stablecoins"]
        ]
      }
    },
    model: {
      title: "EACO Zivilisationsmodell",
      subtitle: "Energie x Einstellung x Zusammenarbeit x Optimierung",
      intro: "Die vier Kernpfeiler von EACO, integriert mit europaeischen Anlagesystemen zu einem komplementaeren Zivilisationsmodell.",
      pillars: [
        { letter: "E", name: "Energie", desc: "Befeuert die Zivilisation mit nachhaltigen Energiedaten", euroLink: "EU ETS, europaeische Gruenfond-Daten, Energiewende-Indikatoren bilden EACOs Energiemodul", color: "green" },
        { letter: "A", name: "Einstellung", desc: "Die Denkweise, die beste Zivilisation der Erde zu bauen", euroLink: "Europaeischer Innovationsgeist, ESG-Fuehrungsgeist, Nachhaltigkeit-zuerst-Ansatz", color: "blue" },
        { letter: "C", name: "Zusammenarbeit", desc: "Grenzuebergreifende Kooperationsmechanismen", euroLink: "EU-Grenzuebergreifende Kooperationsrahmen, europaeische Regulierungsstandards, ESG-Benchmarks", color: "purple" },
        { letter: "O", name: "Optimierung", desc: "Kontinuierliche Verbesserung durch KI und Daten", euroLink: "EU AI Act-Compliance, MiCA-Standards, sicherstes KI+Web3-Modell der Welt", color: "orange" }
      ],
      integrationTitle: "5 Kern-Integrationswege",
      integrations: [
        { num: 1, title: "Europaeische Anlagen als RWA-Anker", desc: "Europaeische Anlagen dienen als Datenquellen fuer Real-World-Assets, Wertankermodelle, KI-Trainingssets und Wirtschaftsindikator-Eingaben fuer EACO." },
        { num: 2, title: "Zusammenarbeit ueber EU-Rahmen", desc: "EACO uebernimmt EU-grenzuebergreifende Kooperationsmechanismen, Regulierungsrahmen, ESG-Standards und Kohlenstoffmarktsysteme." },
        { num: 3, title: "ESG + Energiemodul", desc: "Integration von EU ETS, europaeischen Gruenfond-Daten und Energiewende-Indikatoren zur Staerkung von EACOs Energiemodul." },
        { num: 4, title: "KI + digitale Vermoegenswerte-Compliance", desc: "Nutzung von EU AI Act und MiCA-Rahmen zum Aufbau des konformsten KI+Web3-Modells der Welt." },
        { num: 5, title: "Zivilisationsindex-Eingaben", desc: "Europaeische Aktienindizes, Anleiherenditen, Energiepreise, Kohlenstoffpreise, KI-Innovationsindex und digitale Vermoegenswertliquiditaet speisen ECI." }
      ]
    },
    eci: {
      title: "Earth Civilization Index (ECI)",
      subtitle: "Die Web3-Version des Zivilisationsindex der Erde",
      intro: "ECI ist ein zusammengesetzter Index aus europaeischen Anlageklassen, der als Zivilisationswertschicht von EACO dient.",
      components: [
        { name: "Europaeische Aktienindizes", weight: "20%", desc: "Performance-Daten von FTSE 100, DAX, CAC 40, STOXX 50" },
        { name: "Europaeische Anleiherenditen", weight: "20%", desc: "Renditekurven von UK Gilts, deutschen Bunds, franzoesischen OAT" },
        { name: "Europaeische Energiepreise", weight: "15%", desc: "Preise fuer Brent-Oel, Erdgas, Strom" },
        { name: "EU-Kohlenstoffpreise", weight: "15%", desc: "EU ETS-Kohlenstoffzertifikatspreise" },
        { name: "Europaeischer KI-Innovationsindex", weight: "15%", desc: "KI-Patente, F&E-Investitionen, Startup-Aktivitaet" },
        { name: "Europaeische digitale Vermoegenswertliquiditaet", weight: "15%", desc: "Handelsvolumen und Liquiditaet von BTC, ETH, EACO" }
      ],
      formula: "ECI = 0.20 x Aktienindex + 0.20 x Anleiherendite + 0.15 x Energie + 0.15 x Kohlenstoff + 0.15 x KIIndex + 0.15 x DigitaleLiquiditaet"
    },
    ai: {
      title: "EACO KI-Modul-Architektur",
      subtitle: "Vier KI-Module im Einklang mit dem E-A-C-O Zivilisationsmodell",
      modules: [
        { name: "KI-Energiemodul", icon: "E", desc: "Echtzeit-Energiedatenverarbeitung, ESG-Scoring, CO2-Fussabdruck-Tracking", inputs: ["EU ETS-Preisfeeds", "Brent/Gas-Preise", "Gruenenergie-Daten"], output: "Earth Economic Temperature Score", color: "green" },
        { name: "KI-Einstellungsmodul", icon: "A", desc: "Stimmungsanalyse, Marktverhaltens-Tracking, Community-Gesundheitsmetriken", inputs: ["Social-Media-Stimmung", "Nachrichtenanalyse", "Community-Engagement"], output: "Civilization Attitude Index", color: "blue" },
        { name: "KI-Zusammenarbeitsmodul", icon: "C", desc: "Grenzuebergreifende Kooperationsueberwachung, Regulierungscompliance-Tracking", inputs: ["EU-Regulierungsfeeds", "Grenzuebergreifende Handelsdaten", "ESG-Compliance-Scores"], output: "Cooperation Health Score", color: "purple" },
        { name: "KI-Optimierungsmodul", icon: "O", desc: "Kontinuierliche Modelloptimierung, Risikomanagement, praediktive Analytik", inputs: ["MiCA-Compliance-Daten", "AI Act-Abstimmung", "Marktrisikoindikatoren"], output: "Optimization Recommendations", color: "orange" }
      ],
      flowTitle: "KI-Datenfluss-Architektur",
      flow: ["Datenerfassung", "Vorverarbeitung und Validierung", "KI-Modelltraining", "Zivilisationsindex-Berechnung", "On-chain-Wertzuordnung", "EACO-Token-Wertspiegelung"]
    },
    roadmap: {
      title: "EACO Entwicklungsfahrplan",
      subtitle: "Von Datenintegration zum globalen Zivilisations-Asset",
      threeStepTitle: "3-Schritt-Strategiefahrplan",
      threeSteps: [
        { step: "Schritt 1", title: "Datenintegration", time: "Am einfachsten - Sofort", desc: "Anbindung europaeischer Aktienindizes, Anleiherenditen, Kohlenstoffpreise und Energiepreise zur Bildung von EACOs Zivilisationsdatenschicht.", layer: "Zivilisationsdatenschicht" },
        { step: "Schritt 2", title: "KI-Modelltraining", time: "Mittelfristig", desc: "Training des Energiemoduls mit ESG-Daten, des Zusammenarbeitsmoduls mit EU-Rahmen, des Optimierungsmoduls mit Regulierungssystemen zur Bildung von EACOs Zivilisations-KI-Schicht.", layer: "Zivilisations-KI-Schicht" },
        { step: "Schritt 3", title: "Web3-Wertzuordnung", time: "Langfristig", desc: "Zuordnung europaeischer Anlageklassen zum Zivilisationswertindex von EACO, Bildung des globalen Zivilisationsankermodells Earth E (EACO).", layer: "Globale Zivilisations-Asset-Schicht" }
      ],
      twelveMonthTitle: "12-Monats-Entwicklungsfahrplan",
      months: [
        { month: "M1-M2", title: "Website- und Community-Start", desc: "Start der mehrsprachigen Website, Aufbau globaler Community-Kanaele, initiale DEX-Liquiditaet auf Solana" },
        { month: "M3-M4", title: "Datenquellen-Integration", desc: "Integration europaeischer Aktien-/Anleihen-/Energie-/Kohlenstoffpreis-APIs, Bau der ECI-Datenpipeline" },
        { month: "M5-M6", title: "ECI-Index-Prototyp", desc: "Start des ECI-Index-Prototyps, Veroeffentlichung Whitepaper v1.0, Beginn der KI-Modul-Entwicklung" },
        { month: "M7-M8", title: "KI-Modul-Beta", desc: "Bereitstellung der KI-Energie- und KI-Zusammenarbeitsmodule, Partnerschaft mit ESG-Datenanbietern" },
        { month: "M9-M10", title: "RWA-Produktstart", desc: "Start RWA-gestuetzter Produkte, MiCA-Compliance-Vorbereitung, Boersenlistungs-Antraege" },
        { month: "M11-M12", title: "Vollstaendiges Oekosystem", desc: "Volle KI-Modul-Bereitstellung, ECI-Index live, institutionelle Partnerschaften, globale Expansion" }
      ]
    },
    whitepaper: {
      title: "EACO Whitepaper-Struktur",
      subtitle: "Vollstaendiges Whitepaper-Rahmenwerk fuer EACO x Europaeische Anlagen",
      sections: [
        { num: "1", title: "Zusammenfassung", desc: "EACO-Vision, Mission und Wertversprechen als Earth's Best Coin" },
        { num: "2", title: "EACO Zivilisationsmodell", desc: "Detailliertes Energie x Einstellung x Zusammenarbeit x Optimierung-Rahmenwerk" },
        { num: "3", title: "Europaeische Anlagelandschaft", desc: "Top 10 BIP-Laender, 30 liquide Anlageklassen, Marktanalyse" },
        { num: "4", title: "ECI Earth Civilization Index", desc: "Indexkonstruktion, Gewichtungsmethodik, Datenquellen" },
        { num: "5", title: "KI-Modul-Design", desc: "Architektur von vier KI-Modulen, Trainingsmethodik, Bereitstellungsplan" },
        { num: "6", title: "RWA-Integrationsrahmen", desc: "Tokenisierung realer Anlagen, europaeische Anlagenankerung, Compliance" },
        { num: "7", title: "Web3-Architektur", desc: "Solana-Blockchain, Smart Contracts, Tokenomics, Governance" },
        { num: "8", title: "Regulierungscompliance", desc: "MiCA-Abstimmung, EU AI Act-Compliance, grenzuebergreifender Rechtsrahmen" },
        { num: "9", title: "Fahrplan und Meilensteine", desc: "3-Schritt-Strategiefahrplan, 12-Monats-Entwicklungsplan, langfristige Vision" },
        { num: "10", title: "Tokenomics und Preisziele", desc: "Token-Verteilung, Nutzenmodell, Preismeilenstein-Strategie" },
        { num: "11", title: "Risikoanalyse", desc: "Marktrisiken, Regulierungsrisiken, technische Risiken, Mitigationsstrategien" },
        { num: "12", title: "Fazit und Vision", desc: "EACO als beste KI+RWA+Web3-Zivilisationsmuenze der Erde" }
      ]
    },
    web3: {
      title: "Top 10 Europaeische Web3-freundliche Laender",
      subtitle: "EACO Europa Gruppe - Schluesselmaerkte fuer Web3- und Krypto-Adoption",
      tableHeader: ["Rang", "Land", "Schluesselvorteile & Begruendung"],
      countries: [
        { rank: 1, flag: "DE", name: "Deutschland", advantage: "Compliance-Hub und Fuehrer in Finanzinfrastruktur. Haelt die meisten MiCA-Lizenzen in der EU (57), fast ein Viertel der Gesamtzahl. Integrierte Krypto in etablierte Finanzrahmen vor MiCA und bietet einen klaren Weg fuer regulierte Krypto-Unternehmen." },
        { rank: 2, flag: "CH", name: "Schweiz", advantage: "\"Crypto Valley\" und Innovations-Hub. Das Crypto Valley in Zug ist eines der fruehesten Blockchain-Cluster weltweit. Klarer und unterstuetzender Regulierungsrahmen, der ueber 900 registrierte Krypto-Unternehmen anzieht." },
        { rank: 3, flag: "FR", name: "Frankreich", advantage: "Strategische Regierungsfoerderung. Erhielt 26 MiCA-Lizenzen, Rang 2 in der EU. Die Regierung machte Blockchain ueber den Plan \"Frankreich 2030\" zum Schluesselbereich und treibt die Web3-Implementierung voran." },
        { rank: 4, flag: "LU", name: "Luxemburg", advantage: "Institutionelles Finanzzentrum. Stabiles Finanzsystem (AAA-Rating), riesiges Fonds-Oekosystem (ca. 8,29 Billionen Euro). Coinbase und andere Giganten waehlten es als europaeisches MiCA-Operationszentrum." },
        { rank: 5, flag: "MT", name: "Malta", advantage: "\"Blockchain-Insel\". Verabschiedete bereits 2018 Blockchain-Gesetzgebung, eines der ersten europaeischen Laender mit umfassendem Rechtsrahmen fuer Krypto. Der nationale VFA-Rahmen richtet sich eng an MiCA aus." },
        { rank: 6, flag: "EE", name: "Estland", advantage: "Digitaler-Regierungs-Pionier. Einzigartiges e-Residency-Programm und ausgereiftes digitales Identitaetssystem. Obwohl die Regulierung strenger wurde, bleibt der Rahmen fuer Krypto-Unternehmen attraktiv." },
        { rank: 7, flag: "NL", name: "Niederlande", advantage: "Offene Technologie- und Innovationsatmosphaere. Amsterdam ist ein wichtiger Knotenpunkt fuer DeFi und DePIN geworden. Das offene Geschaeftsklima hat viele Web3-Startups angezogen." },
        { rank: 8, flag: "IT", name: "Italien", advantage: "Hohe Marktaktivitaet. Gute Platzierungen in globalen Krypto-Freundlichkeits-Rankings, herausragende Krypto-Zahlungsakzeptanz. Bereits ueber 73 registrierte Krypto-Dienstleister." },
        { rank: 9, flag: "PT", name: "Portugal", advantage: "Steuervorteile (von neuen Richtlinien betroffen). Frueher ein \"Paradies fuer digitale Nomaden\" mit steuerfreien Krypto-Kapitalgewinnen, doch dieser Vorteil schwindet. Derzeit in einer UEbergangsphase." },
        { rank: 10, flag: "IE", name: "Irland", advantage: "Finanzasset-Hub. Konzentriert zusammen mit Deutschland, Frankreich, den Niederlanden und Luxemburg ca. 72% der EU-Finanzassets. Als traditionelles Finanzzentrum wird es ein wichtiges Tor fuer Krypto-Unternehmen." }
      ],
      trendTitle: "Analyse der Kelltrends",
      trend: "Die groesste Variable in der europaeischen Web3-Entwicklung ist die vollstaendige Umsetzung von MiCA. Sobald es 2026 voll umgesetzt ist, wird Compliance zum entscheidenden Wettbewerbsfaktor. Deutschland, Frankreich, Luxemburg und andere mit starker Finanzkraft und klaren Regulierungspfaden sind die Hauptgewinner.",
      ukNote: "Das Vereinigte Koenigreich hat es nicht in die Top Zehn geschafft. Obwohl London eine aktive Krypto-Community hat, sind die Werte fuer Regulierungsklarheit und Geschaeftsfreundlichkeit niedriger als bei den genannten Laendern. - EACO Europa Gruppe"
    },

    footer: {
      disclaimer: "EACO ist ein KI+RWA+Web3-Zivilisationsmodellprojekt. Dies ist keine Anlageberatung. Alle Preisziele sind angestrebte Meilensteine.",
      rights: "Alle Rechte vorbehalten.",
      links: "Schnelllinks",
      community: "Community"
    }
  },

  // ============================================================
  // ITALIAN
  // ============================================================
  it: {
    _meta: { name: "Italiano", flag: "IT", dir: "ltr" },
    nav: {
      home: "Home",
      price: "Obiettivi di Prezzo",
      gdp: "PIL Europa",
      assets: "Attivi Liquidi",
      model: "Modello di Civilta",
      eci: "Indice ECI",
      ai: "Moduli IA",
      roadmap: "Roadmap",
      whitepaper: "Whitepaper",
      web3: "Paesi Web3"
    },
    hero: {
      title: "Earth's Best Coin",
      subtitle: "Modello di Civilta IA + RWA + Web3",
      tagline: "Energia x Atteggiamento x Cooperazione x Ottimizzazione",
      cta: "Esplora EACO",
      contract: "Indirizzo Contratto",
      website: "Sito Ufficiale"
    },
    price: {
      title: "Obiettivi di Prezzo EACO",
      subtitle: "Tappe di valore graduali da penny a premium",
      stages: [
        { name: "1 Penny Sterlina", value: "L0.01", desc: "Fase di costruzione della comunita - stabilire adozione e consapevolezza" },
        { name: "1 Dime Sterlina", value: "L0.10", desc: "Fase di utilita - EACO integrato negli ecosistemi di attivi del mondo reale" },
        { name: "1 Sterlina", value: "L1.00", desc: "Fase di riconoscimento - EACO diventa un'unita di civilta digitale riconosciuta" },
        { name: "10-20 Sterline", value: "L10-20", desc: "Fase istituzionale - adozione istituzionale e integrazione dell'indice ECI" },
        { name: "100-200 Sterline", value: "L100-200", desc: "Fase di riserva globale - EACO come standard di attivo di civilta globale" }
      ],
      howToAchieve: "Come Raggiungerlo Passo dopo Passo",
      steps: [
        { phase: "Fase 1", title: "Fondazione e Comunita", time: "Mesi 1-6", desc: "Costruire la comunita globale, stabilire una presenza multilingue, lanciare l'app web EACO e creare pool di liquidita iniziali su Solana DEX." },
        { phase: "Fase 2", title: "Utilita e Integrazione RWA", time: "Mesi 7-12", desc: "Collegare le fonti di dati degli attivi europei, costruire il prototipo dell'indice ECI, lanciare i moduli IA per l'analisi dei dati, stabilire partnership con le piattaforme ESG europee." },
        { phase: "Fase 3", title: "Adozione Istituzionale", time: "Anno 2", desc: "Integrare con i framework conformi MiCA, lanciare prodotti RWA di grado istituzionale, ottenere quotazioni su piattaforme di livello 1." },
        { phase: "Fase 4", title: "Attivo di Riserva Globale", time: "Anno 3+", desc: "Schieramento completo del modello di civilta EACO, adozione globale dell'indice ECI, EACO riconosciuto come la migliore moneta IA+RWA+Web3 della terra." }
      ]
    },
    gdp: {
      title: "Top 10 Paesi Europei per PIL",
      subtitle: "Previsione FMI 2026 - Mercati Obiettivo EACO",
      source: "Fonte: FMI Prospettive Economiche Mondiali 2026",
      tableHeader: ["Rango", "Paese", "PIL 2026 (Previsione)", "Priorita di Mercato"],
      countries: [
        { rank: 1, flag: "DE", name: "Germania", gdp: "$5.45T", priority: "Livello 1" },
        { rank: 2, flag: "GB", name: "Regno Unito", gdp: "$4.26T", priority: "Livello 1 - Mercato Nazionale" },
        { rank: 3, flag: "FR", name: "Francia", gdp: "$3.60T", priority: "Livello 1" },
        { rank: 4, flag: "IT", name: "Italia", gdp: "$2.74T", priority: "Livello 2" },
        { rank: 5, flag: "RU", name: "Russia", gdp: "$2.66T", priority: "Livello 2" },
        { rank: 6, flag: "ES", name: "Spagna", gdp: "$2.09T", priority: "Livello 2" },
        { rank: 7, flag: "NL", name: "Paesi Bassi", gdp: "$1.45T", priority: "Livello 3" },
        { rank: 8, flag: "CH", name: "Svizzera", gdp: "$1.15T", priority: "Livello 3" },
        { rank: 9, flag: "PL", name: "Polonia", gdp: "$1.13T", priority: "Livello 3" },
        { rank: 10, flag: "IE", name: "Irlanda", gdp: "$779.4B", priority: "Livello 3" }
      ],
      insight: "Le prime 3 economie (Germania, Regno Unito, Francia) totalizzano oltre 13 trilioni di dollari di PIL. EACO punta prima a questi mercati per un impatto massimo."
    },
    assets: {
      title: "Le 30 Classi di Attivi Liquidi piu Forti del Regno Unito ed Europa",
      subtitle: "Per categoria - non consulenza di investimento individuale",
      categories: [
        { icon: "B", name: "Valuta ed Equivalenti di Cassa", liquidity: "Molto Alta", color: "blue", items: ["Contanti GBP", "Contanti EUR", "UK Gilts / EU T-Bills", "Fondi Mercato Monetario", "Depositi Bancari"] },
        { icon: "S", name: "Azioni", liquidity: "Molto Alta", color: "green", items: ["UK FTSE 100", "EU STOXX 50", "UK FTSE 250", "DAX Tedesco", "CAC 40 Francese"] },
        { icon: "B", name: "Obbligazioni", liquidity: "Alta", color: "purple", items: ["UK Gilts (Lungo Termine)", "Bund Tedeschi", "OAT Francesi", "Obbligazioni Corporate Investment Grade UE", "Obbligazioni High Yield UE"] },
        { icon: "R", name: "Immobiliare", liquidity: "Medio-Alta", color: "orange", items: ["UK REITs", "REITs Europei", "Fondi Immobiliari Commerciali", "Fondi di Infrastruttura"] },
        { icon: "C", name: "Materie Prime", liquidity: "Alta", color: "amber", items: ["Petrolio Brent", "Gas Naturale Europeo", "Oro", "Argento", "EU Carbon ETS"] },
        { icon: "D", name: "Attivi Digitali", liquidity: "Alta", color: "cyan", items: ["EACO + SOL", "Bitcoin", "Ethereum", "Stablecoin EUR", "Obbligazioni Digitali Conformi UE"] }
      ],
      tableTitle: "Riepilogo: 30 Classi di Attivi Liquidi piu Forti",
      table: {
        headers: ["Categoria", "Liquidita", "Esempi"],
        rows: [
          ["Valuta", "Molto Alta", "GBP, EUR, Fondi Mercato Monetario"],
          ["Azioni", "Molto Alta", "FTSE 100, DAX, STOXX 50"],
          ["Obbligazioni", "Alta", "Bund, Gilts, OAT"],
          ["Immobiliare", "Medio-Alta", "REITs, Fondi Infrastruttura"],
          ["Materie Prime", "Alta", "Brent, Gas Naturale, Oro"],
          ["Attivi Digitali", "Alta", "EACO+SOL, BTC, ETH, Stablecoin"]
        ]
      }
    },
    model: {
      title: "Modello di Civilta EACO",
      subtitle: "Energia x Atteggiamento x Cooperazione x Ottimizzazione",
      intro: "I quattro pilastri fondamentali di EACO, integrati con i sistemi di attivi europei per formare un modello di civilta complementare.",
      pillars: [
        { letter: "E", name: "Energia", desc: "Alimentare la civilta con dati di energia sostenibile", euroLink: "EU ETS, dati dei fondi verdi europei, indicatori di transizione energetica formano il modulo Energia di EACO", color: "green" },
        { letter: "A", name: "Atteggiamento", desc: "La mentalita di costruire la migliore civilta terrestre", euroLink: "Spirito di innovazione europeo, mentalita di leadership ESG, approccio sostenibilita prima", color: "blue" },
        { letter: "C", name: "Cooperazione", desc: "Meccanismi di collaborazione transfrontaliera", euroLink: "Quadro di cooperazione transnazionale UE, standard normativi europei, benchmark ESG", color: "purple" },
        { letter: "O", name: "Ottimizzazione", desc: "Miglioramento continuo attraverso IA e dati", euroLink: "Conformita EU AI Act, standard MiCA, il modello IA+Web3 piu sicuro al mondo", color: "orange" }
      ],
      integrationTitle: "5 Vie di Integrazione Principali",
      integrations: [
        { num: 1, title: "Attivi Europei come Ancore RWA", desc: "Gli attivi europei servono come fonti di dati di attivi del mondo reale, modelli di ancoraggio del valore, set di addestramento IA e input di indicatori economici per EACO." },
        { num: 2, title: "Cooperazione tramite Quadri UE", desc: "EACO adotta i meccanismi di cooperazione transnazionale dell'UE, i quadri normativi, gli standard ESG e i sistemi del mercato del carbonio." },
        { num: 3, title: "ESG + Modulo Energia", desc: "Integrare EU ETS, i dati dei fondi verdi europei e gli indicatori di transizione energetica per rafforzare il modulo Energia di EACO." },
        { num: 4, title: "Conformita IA + Attivi Digitali", desc: "Sfruttare EU AI Act e i quadri MiCA per costruire il modello IA+Web3 piu conforme al mondo." },
        { num: 5, title: "Input dell'Indice di Civilta", desc: "Gli indici azionari europei, i rendimenti obbligazionari, i prezzi dell'energia, i prezzi del carbonio, l'indice di innovazione IA e la liquidita degli attivi digitali alimentano l'ECI." }
      ]
    },
    eci: {
      title: "Indice di Civilta della Terra (ECI)",
      subtitle: "La versione Web3 dell'indice di civilta della Terra",
      intro: "ECI e un indice composito costruito da categorie di attivi europei, che serve come strato di valore di civilta di EACO.",
      components: [
        { name: "Indici Azionari Europei", weight: "20%", desc: "Dati di performance di FTSE 100, DAX, CAC 40, STOXX 50" },
        { name: "Rendimenti Obbligazionari Europei", weight: "20%", desc: "Curve dei rendimenti di UK Gilts, Bund tedeschi, OAT francesi" },
        { name: "Prezzi dell'Energia Europea", weight: "15%", desc: "Prezzi del petrolio Brent, gas naturale, elettricita" },
        { name: "Prezzi del Carbonio UE", weight: "15%", desc: "Prezzi delle quote di carbonio EU ETS" },
        { name: "Indice di Innovazione IA Europeo", weight: "15%", desc: "Brevetti IA, investimenti in R&S, attivita delle startup" },
        { name: "Liquidita degli Attivi Digitali Europei", weight: "15%", desc: "Volumi di scambio e liquidita di BTC, ETH, EACO" }
      ],
      formula: "ECI = 0.20 x IndiceAzionario + 0.20 x RendimentoObbligazionario + 0.15 x Energia + 0.15 x Carbonio + 0.15 x IndiceIA + 0.15 x LiquiditaDigitale"
    },
    ai: {
      title: "Architettura dei Moduli IA di EACO",
      subtitle: "Quattro moduli IA allineati con il modello di civilta E-A-C-O",
      modules: [
        { name: "Modulo IA-Energia", icon: "E", desc: "Elaborazione dati energetici in tempo reale, scoring ESG, tracciamento impronta di carbonio", inputs: ["Feed prezzi EU ETS", "Prezzi Brent/Gas", "Dati energia verde"], output: "Punteggio Temperatura Economica Terrestre", color: "green" },
        { name: "Modulo IA-Atteggiamento", icon: "A", desc: "Analisi del sentiment, tracciamento dell'atteggiamento di mercato, metriche di salute della comunita", inputs: ["Sentiment social media", "Analisi notizie", "Engagement comunita"], output: "Indice di Atteggiamento di Civilta", color: "blue" },
        { name: "Modulo IA-Cooperazione", icon: "C", desc: "Monitoraggio della collaborazione transfrontaliera, tracciamento della conformita normativa", inputs: ["Feed normativi UE", "Dati commercio transfrontaliero", "Punteggi conformita ESG"], output: "Punteggio di Salute della Cooperazione", color: "purple" },
        { name: "Modulo IA-Ottimizzazione", icon: "O", desc: "Ottimizzazione continua del modello, gestione dei rischi, analisi predittiva", inputs: ["Dati conformita MiCA", "Allineamento AI Act", "Indicatori di rischio di mercato"], output: "Raccomandazioni di Ottimizzazione", color: "orange" }
      ],
      flowTitle: "Architettura del Flusso di Dati IA",
      flow: ["Ingestione Dati", "Pre-elaborazione e Validazione", "Addestramento Modello IA", "Calcolo Indice di Civilta", "Mappatura Valore On-chain", "Riflessione Valore Token EACO"]
    },
    roadmap: {
      title: "Roadmap di Sviluppo EACO",
      subtitle: "Dall'integrazione dei dati all'attivo di civilta globale",
      threeStepTitle: "Roadmap Strategica in 3 Passi",
      threeSteps: [
        { step: "Passo 1", title: "Integrazione dei Dati", time: "Più facile - Immediato", desc: "Collegare gli indici azionari europei, i rendimenti obbligazionari, i prezzi del carbonio e dell'energia per formare lo Strato Dati di Civilta di EACO.", layer: "Strato Dati di Civilta" },
        { step: "Passo 2", title: "Addestramento del Modello IA", time: "Medio termine", desc: "Addestrare il modulo Energia con i dati ESG, il modulo Cooperazione con i quadri UE, il modulo Ottimizzazione con i sistemi normativi per formare lo Strato IA di Civilta di EACO.", layer: "Strato IA di Civilta" },
        { step: "Passo 3", title: "Mappatura del Valore Web3", time: "Lungo termine", desc: "Mappare le categorie di attivi europei all'indice di valore di civilta di EACO, formando il modello di ancoraggio di civilta globale Earth E (EACO).", layer: "Strato Attivi di Civilta Globale" }
      ],
      twelveMonthTitle: "Roadmap di Sviluppo di 12 Mesi",
      months: [
        { month: "M1-M2", title: "Lancio Sito e Comunita", desc: "Lancio del sito multilingue, stabilimento dei canali della comunita globale, liquidita DEX iniziale su Solana" },
        { month: "M3-M4", title: "Integrazione Fonti Dati", desc: "Integrazione delle API dei prezzi europei azioni/obbligazioni/energia/carbonio, costruzione della pipeline dati ECI" },
        { month: "M5-M6", title: "Prototipo Indice ECI", desc: "Lancio del prototipo dell'indice ECI, pubblicazione del whitepaper v1.0, inizio dello sviluppo dei moduli IA" },
        { month: "M7-M8", title: "Beta dei Moduli IA", desc: "Schieramento dei moduli IA-Energia e IA-Cooperazione, partnership con fornitori di dati ESG" },
        { month: "M9-M10", title: "Lancio Prodotti RWA", desc: "Lancio di prodotti supportati da RWA, preparazione conformita MiCA, domande di quotazione in borsa" },
        { month: "M11-M12", title: "Ecosistema Completo", desc: "Schieramento completo dei moduli IA, indice ECI live, partnership istituzionali, espansione globale" }
      ]
    },
    whitepaper: {
      title: "Struttura del Whitepaper EACO",
      subtitle: "Quadro completo del whitepaper per EACO x Attivi Europei",
      sections: [
        { num: "1", title: "Sintesi Esecutiva", desc: "Visione, missione e proposta di valore di EACO come Earth's Best Coin" },
        { num: "2", title: "Modello di Civilta EACO", desc: "Quadro dettagliato Energia x Atteggiamento x Cooperazione x Ottimizzazione" },
        { num: "3", title: "Panorama degli Attivi Europei", desc: "Top 10 paesi per PIL, 30 classi di attivi liquidi, analisi di mercato" },
        { num: "4", title: "Indice di Civilta della Terra ECI", desc: "Costruzione dell'indice, metodologia di ponderazione, fonti di dati" },
        { num: "5", title: "Design dei Moduli IA", desc: "Architettura dei quattro moduli IA, metodologia di addestramento, piano di schieramento" },
        { num: "6", title: "Quadro di Integrazione RWA", desc: "Tokenizzazione di attivi del mondo reale, ancoraggio di attivi europei, conformita" },
        { num: "7", title: "Architettura Web3", desc: "Blockchain Solana, smart contract, tokenomics, governance" },
        { num: "8", title: "Conformita Normativa", desc: "Allineamento MiCA, conformita EU AI Act, quadro giuridico transfrontaliero" },
        { num: "9", title: "Roadmap e Tappe", desc: "Roadmap strategica in 3 passi, piano di sviluppo di 12 mesi, visione a lungo termine" },
        { num: "10", title: "Tokenomics e Obiettivi di Prezzo", desc: "Distribuzione dei token, modello di utilita, strategia delle tappe di prezzo" },
        { num: "11", title: "Analisi dei Rischi", desc: "Rischi di mercato, rischi normativi, rischi tecnici, strategie di mitigazione" },
        { num: "12", title: "Conclusione e Visione", desc: "EACO come la migliore moneta di civilta IA+RWA+Web3 della terra" }
      ]
    },
    web3: {
      title: "Top 10 Paesi Europei Favorevoli al Web3",
      subtitle: "Gruppo Europa EACO - Mercati chiave per l'adozione di Web3 e cripto",
      tableHeader: ["Rango", "Paese", "Vantaggi Chiave e Motivazione"],
      countries: [
        { rank: 1, flag: "DE", name: "Germania", advantage: "Hub di conformita e leader nell'infrastruttura finanziaria. Detiene il maggior numero di licenze MiCA nell'UE (57), quasi un quarto del totale. Ha integrato il cripto in quadri finanziari consolidati prima di MiCA, offrendo un percorso chiaro per le imprese regolate." },
        { rank: 2, flag: "CH", name: "Svizzera", advantage: "\"Crypto Valley\" e hub di innovazione. Il Crypto Valley di Zug e uno dei primi cluster blockchain al mondo. Quadro normativo chiaro e di supporto, che attira oltre 900 aziende cripto registrate." },
        { rank: 3, flag: "FR", name: "Francia", advantage: "Spinta strategica del governo. Ottenute 26 licenze MiCA, al secondo posto nell'UE. Il governo ha designato la blockchain come area chiave tramite il piano \"Francia 2030\", guidando l'implementazione Web3." },
        { rank: 4, flag: "LU", name: "Lussemburgo", advantage: "Centro finanziario istituzionale. Sistema finanziario stabile (rating AAA), vasto ecosistema di fondi (circa 8,29 trilioni di euro). Coinbase e altri giganti lo hanno scelto come centro europeo per le operazioni MiCA." },
        { rank: 5, flag: "MT", name: "Malta", advantage: "\"Isola Blockchain\". Ha approvato legislazione blockchain gia nel 2018, uno dei primi paesi europei con un quadro legale completo per il cripto. Il suo quadro VFA nazionale e strettamente allineato con MiCA." },
        { rank: 6, flag: "EE", name: "Estonia", advantage: "Pioniere del governo digitale. Programma unico di e-Residency e sistema di identita digitale maturo. Sebbene la regolamentazione si sia irrigidita, il quadro rimane attraente per le aziende cripto." },
        { rank: 7, flag: "NL", name: "Paesi Bassi", advantage: "Atmosfera aperta a tecnologia e innovazione. Amsterdam e diventata un nodo importante per DeFi e DePIN. Il clima commerciale aperto ha attratto numerose startup Web3." },
        { rank: 8, flag: "IT", name: "Italia", advantage: "Alta attivita di mercato. Punteggi elevati nelle classifiche globali di cripto-amicizia, con un'accettazione dei pagamenti cripto eccezionale. Oltre 73 provider di servizi cripto registrati." },
        { rank: 9, flag: "PT", name: "Portogallo", advantage: "Vantaggi fiscali (soggetti a nuove politiche). In precedenza un \"paradiso per nomadi digitali\" con plusvalenze cripto esenti da tasse, sebbene questo vantaggio stia diminuendo. Attualmente in fase di transizione." },
        { rank: 10, flag: "IE", name: "Irlanda", advantage: "Hub di attivita finanziarie. Insieme a Germania, Francia, Paesi Bassi e Lussemburgo, concentra circa il 72% degli attivita finanziari dell'UE. Come centro finanziario internazionale, sta diventando un'importante porta d'accesso per le aziende cripto." }
      ],
      trendTitle: "Analisi delle Tendenze Chiave",
      trend: "La variabile principale nello sviluppo Web3 europeo e la piena attuazione di MiCA. Una volta applicata pienamente nel 2026, la capacita di conformita diventa il fattore competitivo chiave. Germania, Francia, Lussemburgo e altri con solidita finanziaria e percorsi normativi chiari sono i principali vincitori.",
      ukNote: "Il Regno Unito non e entrato nei primi dieci. Sebbene Londra abbia una comunita cripto attiva, i suoi punteggi di chiarezza normativa e amicizia commerciale sono inferiori ai paesi elencati. - Gruppo Europa EACO"
    },

    footer: {
      disclaimer: "EACO e un progetto di modello di civilta IA+RWA+Web3. Questo non e un consiglio finanziario. Tutti gli obiettivi di prezzo sono tappe aspirazionali.",
      rights: "Tutti i diritti riservati.",
      links: "Link Rapidi",
      community: "Comunita"
    }
  },

  // ============================================================
  // DUTCH
  // ============================================================
  nl: {
    _meta: { name: "Nederlands", flag: "NL", dir: "ltr" },
    nav: {
      home: "Home",
      price: "Prijsdoelen",
      gdp: "Europa BBP",
      assets: "Liquide Activa",
      model: "Civisatiemodel",
      eci: "ECI Index",
      ai: "AI Modules",
      roadmap: "Roadmap",
      whitepaper: "Whitepaper",
      web3: "Web3 Landen"
    },
    hero: {
      title: "Earth's Best Coin",
      subtitle: "AI + RWA + Web3 Civisatiemodel",
      tagline: "Energie x Houding x Samenwerking x Optimalisatie",
      cta: "Ontdek EACO",
      contract: "Contractadres",
      website: "Officiele Website"
    },
    price: {
      title: "EACO Prijsdoelen",
      subtitle: "Stapsgewijze waarde-mijlpalen van penny tot premium",
      stages: [
        { name: "1 Penny Pond", value: "L0.01", desc: "Community-bouwfase - adoptie en bewustwording vestigen" },
        { name: "1 Dime Pond", value: "L0.10", desc: "Nut-fase - EACO geintegreerd in ecosysteem voor real-world activa" },
        { name: "1 Pond", value: "L1.00", desc: "Erkenning-fase - EACO wordt een erkende digitale civisatie-eenheid" },
        { name: "10-20 Pond", value: "L10-20", desc: "Institutionele fase - institutionele adoptie en ECI-index integratie" },
        { name: "100-200 Pond", value: "L100-200", desc: "Globale reserve-fase - EACO als wereldwijde civisatie-activastandaard" }
      ],
      howToAchieve: "Hoe Dit Stap voor Stap te Bereiken",
      steps: [
        { phase: "Fase 1", title: "Fundering en Community", time: "Maanden 1-6", desc: "Wereldwijde community bouwen, meertalige aanwezigheid vestigen, EACO-webapp lanceren en initiële liquiditeitspools creëren op Solana DEX." },
        { phase: "Fase 2", title: "Nut en RWA-Integratie", time: "Maanden 7-12", desc: "Europese activa-gegevensbronnen koppelen, ECI-index-prototype bouwen, AI-modules voor data-analyse lanceren, partnerschappen met Europese ESG-platforms aangaan." },
        { phase: "Fase 3", title: "Institutionele Adoptie", time: "Jaar 2", desc: "Integreren met MiCA-conforme kaders, institutionele RWA-producten lanceren, beursonnoteringen op tier-1 platforms behalen." },
        { phase: "Fase 4", title: "Wereldwijd Reserve-Activa", time: "Jaar 3+", desc: "Volledige uitrol van het EACO-civisatiemodel, wereldwijde adoptie van ECI-index, EACO erkend als 's werelds beste AI+RWA+Web3-munt." }
      ]
    },
    gdp: {
      title: "Top 10 Europese Landen op BBP",
      subtitle: "IMF 2026 Voorspelling - EACO Doelmarkten",
      source: "Bron: IMF World Economic Outlook 2026",
      tableHeader: ["Rang", "Land", "BBP 2026 (Voorspelling)", "Marktprioriteit"],
      countries: [
        { rank: 1, flag: "DE", name: "Duitsland", gdp: "$5.45T", priority: "Niveau 1" },
        { rank: 2, flag: "GB", name: "Verenigd Koninkrijk", gdp: "$4.26T", priority: "Niveau 1 - Thuismarkt" },
        { rank: 3, flag: "FR", name: "Frankrijk", gdp: "$3.60T", priority: "Niveau 1" },
        { rank: 4, flag: "IT", name: "Italie", gdp: "$2.74T", priority: "Niveau 2" },
        { rank: 5, flag: "RU", name: "Rusland", gdp: "$2.66T", priority: "Niveau 2" },
        { rank: 6, flag: "ES", name: "Spanje", gdp: "$2.09T", priority: "Niveau 2" },
        { rank: 7, flag: "NL", name: "Nederland", gdp: "$1.45T", priority: "Niveau 3" },
        { rank: 8, flag: "CH", name: "Zwitserland", gdp: "$1.15T", priority: "Niveau 3" },
        { rank: 9, flag: "PL", name: "Polen", gdp: "$1.13T", priority: "Niveau 3" },
        { rank: 10, flag: "IE", name: "Ierland", gdp: "$779.4B", priority: "Niveau 3" }
      ],
      insight: "De top-3 economieën (Duitsland, Verenigd Koninkrijk, Frankrijk) combineren voor meer dan $13 biljoen BBP. EACO richt zich eerst op deze markten voor maximale impact."
    },
    assets: {
      title: "De 30 Sterkste Liquide Activaklassen van het VK en Europa",
      subtitle: "Per categorie - geen individueel beleggingsadvies",
      categories: [
        { icon: "B", name: "Valuta en Cash-equivalenten", liquidity: "Zeer Hoog", color: "blue", items: ["GBP Cash", "EUR Cash", "UK Gilts / EU T-Bills", "Geldmarktfondsen", "Bankdeposito's"] },
        { icon: "S", name: "Aandelen", liquidity: "Zeer Hoog", color: "green", items: ["UK FTSE 100", "EU STOXX 50", "UK FTSE 250", "Duitse DAX", "Franse CAC 40"] },
        { icon: "B", name: "Obligaties", liquidity: "Hoog", color: "purple", items: ["UK Gilts (Lange Termijn)", "Duitse Bunds", "Franse OAT", "EU Investment Grade Corporate", "EU High Yield"] },
        { icon: "R", name: "Vastgoed", liquidity: "Gemiddeld-Hoog", color: "orange", items: ["UK REITs", "Europese REITs", "Commercieel Vastgoedfondsen", "Infrastructuurfondsen"] },
        { icon: "C", name: "Grondstoffen", liquidity: "Hoog", color: "amber", items: ["Brent-olie", "Europees Aardgas", "Goud", "Zilver", "EU Carbon ETS"] },
        { icon: "D", name: "Digitale Activa", liquidity: "Hoog", color: "cyan", items: ["EACO + SOL", "Bitcoin", "Ethereum", "EUR Stablecoins", "EU-conforme Digitale Obligaties"] }
      ],
      tableTitle: "Samenvatting: 30 Sterkste Liquide Activaklassen",
      table: {
        headers: ["Categorie", "Liquiditeit", "Voorbeelden"],
        rows: [
          ["Valuta", "Zeer Hoog", "GBP, EUR, Geldmarktfondsen"],
          ["Aandelen", "Zeer Hoog", "FTSE 100, DAX, STOXX 50"],
          ["Obligaties", "Hoog", "Bunds, Gilts, OAT"],
          ["Vastgoed", "Gemiddeld-Hoog", "REITs, Infrastructuurfondsen"],
          ["Grondstoffen", "Hoog", "Brent, Aardgas, Goud"],
          ["Digitale Activa", "Hoog", "EACO+SOL, BTC, ETH, Stablecoins"]
        ]
      }
    },
    model: {
      title: "EACO Civisatiemodel",
      subtitle: "Energie x Houding x Samenwerking x Optimalisatie",
      intro: "De vier kernpijlers van EACO, geintegreerd met Europese activasystemen tot een complementair civisatiemodel.",
      pillars: [
        { letter: "E", name: "Energie", desc: "De civisatie aandrijven met duurzame energiegegevens", euroLink: "EU ETS, Europese groene fondsgegevens, energietransitie-indicatoren vormen EACO's Energiemodule", color: "green" },
        { letter: "A", name: "Houding", desc: "De mentaliteit om 's werelds beste civisatie te bouwen", euroLink: "Europese innovatiegeest, ESG-leiderschapsmentaliteit, duurzaamheid-eerst benadering", color: "blue" },
        { letter: "C", name: "Samenwerking", desc: "Grensoverschrijdende samenwerkingsmechanismen", euroLink: "EU-grensoverschrijdende samenwerkingskader, Europese regelgevingsstandaarden, ESG-benchmarks", color: "purple" },
        { letter: "O", name: "Optimalisatie", desc: "Continue verbetering via AI en data", euroLink: "EU AI Act-naleving, MiCA-standaarden, 's werelds veiligste AI+Web3-model", color: "orange" }
      ],
      integrationTitle: "5 Kernintegratieroutes",
      integrations: [
        { num: 1, title: "Europese Activa als RWA-Ankers", desc: "Europese activa dienen als real-world activa-gegevensbronnen, waarde-ankermodellen, AI-trainingssets en economische indicator-inputs voor EACO." },
        { num: 2, title: "Samenwerking via EU-kaders", desc: "EACO neemt EU-grensoverschrijdende samenwerkingsmechanismen, regelgevingskaders, ESG-standaarden en koolstofmarktsystemen over." },
        { num: 3, title: "ESG + Energiemodule", desc: "Integratie van EU ETS, Europese groene fondsgegevens en energietransitie-indicatoren om EACO's Energiemodule te versterken." },
        { num: 4, title: "AI + Digitale Activa-naleving", desc: "Gebruik van EU AI Act en MiCA-kaders om 's werelds meest conforme AI+Web3-model te bouwen." },
        { num: 5, title: "Civisatie-index-inputs", desc: "Europese aandelenindices, obligatierendementen, energieprijzen, koolstofprijzen, AI-innovatieindex en digitale activaliquiditeit voeden ECI." }
      ]
    },
    eci: {
      title: "Earth Civilization Index (ECI)",
      subtitle: "De Web3-versie van de civisatie-index van de aarde",
      intro: "ECI is een samengestelde index gebouwd uit Europese activacategorieën, dienend als EACO's civisatie-waar delaag.",
      components: [
        { name: "Europese Aandelenindices", weight: "20%", desc: "Prestatiegegevens van FTSE 100, DAX, CAC 40, STOXX 50" },
        { name: "Europese Obligatierendementen", weight: "20%", desc: "Rendementscurves van UK Gilts, Duitse Bunds, Franse OAT" },
        { name: "Europese Energieprijzen", weight: "15%", desc: "Prijzen van Brent-olie, aardgas, elektriciteit" },
        { name: "EU-koolstofprijzen", weight: "15%", desc: "EU ETS-koolstofquota-prijzen" },
        { name: "Europese AI-innovatie-index", weight: "15%", desc: "AI-patenten, R&D-investeringen, startup-activiteit" },
        { name: "Europese Digitale Activaliquiditeit", weight: "15%", desc: "Handelsvolumes en liquiditeit van BTC, ETH, EACO" }
      ],
      formula: "ECI = 0.20 x Aandelenindex + 0.20 x Obligatierendement + 0.15 x Energie + 0.15 x Koolstof + 0.15 x AIIndex + 0.15 x DigitaleLiquiditeit"
    },
    ai: {
      title: "EACO AI-modulearchitectuur",
      subtitle: "Vier AI-modules in lijn met het E-A-C-O civisatiemodel",
      modules: [
        { name: "AI-Energiemodule", icon: "E", desc: "Real-time energiegegevensverwerking, ESG-scoring, koolstofvoetafdruk-tracking", inputs: ["EU ETS-prijsfeeds", "Brent/Gas-prijzen", "Groene energiegegevens"], output: "Earth Economic Temperature Score", color: "green" },
        { name: "AI-Houdingsmodule", icon: "A", desc: "Sentimentanalyse, markthouding-tracking, community-gezondheidsmetrieken", inputs: ["Social media-sentiment", "Nieuwsanalyse", "Community-engagement"], output: "Civilization Attitude Index", color: "blue" },
        { name: "AI-Samenwerkingsmodule", icon: "C", desc: "Grensoverschrijdende samenwerkingsmonitoring, regelgevingsnaleving-tracking", inputs: ["EU-regelgevingsfeeds", "Grensoverschrijdende handelsgegevens", "ESG-nalevingsscores"], output: "Cooperation Health Score", color: "purple" },
        { name: "AI-Optimalisatiemodule", icon: "O", desc: "Continue modeloptimalisatie, risicobeheer, predictieve analyse", inputs: ["MiCA-nalevingsgegevens", "AI Act-afstemming", "Marktrisico-indicatoren"], output: "Optimization Recommendations", color: "orange" }
      ],
      flowTitle: "AI-gegevensstroomarchitectuur",
      flow: ["Gegevensinname", "Voorbewerking en Validatie", "AI-modeltraining", "Civisatie-indexberekening", "On-chain-waardetoewijzing", "EACO-token-waarspiegeling"]
    },
    roadmap: {
      title: "EACO Ontwikkelingsroadmap",
      subtitle: "Van gegevensintegratie tot wereldwijd civisatie-activa",
      threeStepTitle: "3-Stap Strategische Roadmap",
      threeSteps: [
        { step: "Stap 1", title: "Gegevensintegratie", time: "Makkelijkst - Onmiddellijk", desc: "Europese aandelenindices, obligatierendementen, koolstofprijzen en energieprijzen koppelen om EACO's Civisatiegegevenslaag te vormen.", layer: "Civisatiegegevenslaag" },
        { step: "Stap 2", title: "AI-modeltraining", time: "Middellange termijn", desc: "Energiemodule trainen met ESG-gegevens, Samenwerkingsmodule met EU-kaders, Optimalisatiemodule met regelgevingssystemen om EACO's Civisatie-AI-laag te vormen.", layer: "Civisatie-AI-laag" },
        { step: "Stap 3", title: "Web3-waardetoewijzing", time: "Lange termijn", desc: "Europese activacategorieën toewijzen aan EACO's civisatie-waardeindex, vormend het Earth E (EACO) wereldwijde civisatie-ankermodel.", layer: "Wereldwijde Civisatie-activalaag" }
      ],
      twelveMonthTitle: "12-Maand Ontwikkelingsroadmap",
      months: [
        { month: "M1-M2", title: "Website- en Community-lancering", desc: "Meertalige website lanceren, wereldwijde community-kanalen opzetten, initiële DEX-liquiditeit op Solana" },
        { month: "M3-M4", title: "Gegevensbron-integratie", desc: "Europese aandelen-/obligatie-/energie-/koolstofprijs-API's integreren, ECI-gegevenspijplijn bouwen" },
        { month: "M5-M6", title: "ECI-index-prototype", desc: "ECI-index-prototype lanceren, whitepaper v1.0 publiceren, AI-module-ontwikkeling starten" },
        { month: "M7-M8", title: "AI-module Beta", desc: "AI-Energie- en AI-Samenwerkingsmodules uitrollen, partnerschap met ESG-gegevensproviders" },
        { month: "M9-M10", title: "RWA-productlancering", desc: "RWA-ondersteunde producten lanceren, MiCA-nalevingsvoorbereiding, beursnotering-aanvragen" },
        { month: "M11-M12", title: "Volledig Ecosysteem", desc: "Volledige AI-module-uitrol, ECI-index live, institutionele partnerschappen, wereldwijde uitbreiding" }
      ]
    },
    whitepaper: {
      title: "EACO Whitepaper-structuur",
      subtitle: "Compleet whitepaper-raamwerk voor EACO x Europese Activa",
      sections: [
        { num: "1", title: "Uitvoerende Samenvatting", desc: "EACO-visie, missie en waardepropositie als Earth's Best Coin" },
        { num: "2", title: "EACO Civisatiemodel", desc: "Gedetailleerd Energie x Houding x Samenwerking x Optimalisatie-raamwerk" },
        { num: "3", title: "Europese Activalandschap", desc: "Top 10 BBP-landen, 30 liquide activaklassen, marktanalyse" },
        { num: "4", title: "ECI Earth Civilization Index", desc: "Indexconstructie, weegmethodologie, gegevensbronnen" },
        { num: "5", title: "AI-module-ontwerp", desc: "Architectuur van vier AI-modules, trainingsmethodologie, uitrolplan" },
        { num: "6", title: "RWA-integratiekader", desc: "Tokenisatie van real-world activa, Europese activa-ankering, naleving" },
        { num: "7", title: "Web3-architectuur", desc: "Solana-blockchain, slimme contracten, tokenomics, governance" },
        { num: "8", title: "Regelgevingsnaleving", desc: "MiCA-afstemming, EU AI Act-naleving, grensoverschrijvend juridisch kader" },
        { num: "9", title: "Roadmap en Mijlpalen", desc: "3-stap strategische roadmap, 12-maand ontwikkelingsplan, langetermijnvisie" },
        { num: "10", title: "Tokenomics en Prijsdoelen", desc: "Token-distributie, nutmodel, prijmijlpaal-strategie" },
        { num: "11", title: "Risicoanalyse", desc: "Marktrisico's, regelgevingsrisico's, technische risico's, mitigatiestrategieën" },
        { num: "12", title: "Conclusie en Visie", desc: "EACO als 's werelds beste AI+RWA+Web3-civisatiemunt" }
      ]
    },
    web3: {
      title: "Top 10 Europese Web3-vriendelijke Landen",
      subtitle: "EACO Europa Groep - Sleutelmarkten voor Web3- en crypto-adoptie",
      tableHeader: ["Rang", "Land", "Belangrijkste Voordelen en Onderbouwing"],
      countries: [
        { rank: 1, flag: "DE", name: "Duitsland", advantage: "Compliance-hub en leider in financiële infrastructuur. Heeft de meeste MiCA-licenties in de EU (57), bijna een kwart van het totaal. Integreerde crypto in gevestigde financiële kaders vóór MiCA, wat een duidelijk pad biedt voor gereguleerde crypto-bedrijven." },
        { rank: 2, flag: "CH", name: "Zwitserland", advantage: "\"Crypto Valley\" en innovatie-hub. Het Crypto Valley in Zug is een van de vroegste blockchain-clusters ter wereld. Duidelijk en ondersteunend regelgevingskader, trekt meer dan 900 geregistreerde crypto-bedrijven." },
        { rank: 3, flag: "FR", name: "Frankrijk", advantage: "Strategische overheidsstimulering. Kreeg 26 MiCA-licenties, tweede in de EU. De regering aangewezen blockchain als kerngebied via het \"Frankrijk 2030\"-plan, drijft Web3-implementatie." },
        { rank: 4, flag: "LU", name: "Luxemburg", advantage: "Institutioneel financieel centrum. Stabiel financieel systeem (AAA-rating), enorm fondsen-ecosysteem (ca. 8,29 biljoen euro). Coinbase en andere giganten kozen het als Europees MiCA-operations centrum." },
        { rank: 5, flag: "MT", name: "Malta", advantage: "\"Blockchain Eiland\". Nam blockchain-wetgeving aan al in 2018, een van de eerste Europese landen met een uitgebreid wettelijk kader voor crypto. Het nationale VFA-kader sluit nauw aan op MiCA." },
        { rank: 6, flag: "EE", name: "Estland", advantage: "Digitale overheid-pionier. Uniek e-Residency-programma en volwassen digitaal identiteitssysteem. Hoewel de regelgeving is aangescherpt, blijft het kader aantrekkelijk voor crypto-bedrijven." },
        { rank: 7, flag: "NL", name: "Nederland", advantage: "Open technologie- en innovatie-atmosfeer. Amsterdam is een belangrijk knooppunt geworden voor DeFi en DePIN. Het open zakelijke klimaat heeft veel Web3-startups aangetrokken." },
        { rank: 8, flag: "IT", name: "Italie", advantage: "Hoge marktactiviteit. Hoge scores in wereldwijde crypto-vriendelijkheidsrankings, met uitstekende crypto-betalingsacceptatie. Al meer dan 73 geregistreerde crypto-serviceproviders." },
        { rank: 9, flag: "PT", name: "Portugal", advantage: "Belastingvoordelen (onderhevig aan nieuw beleid). Voorheen een \"paradijs voor digitale nomaden\" met belastingvrije crypto-kapitaalwinsten, hoewel dit voordeel afneemt. Momenteel in een overgangsfase." },
        { rank: 10, flag: "IE", name: "Ierland", advantage: "Financieel activa-hub. Samen met Duitsland, Frankrijk, Nederland en Luxemburg concentreert ongeveer 72% van de EU-financiële activa. Als traditioneel financieel centrum wordt het een belangrijke poort voor crypto-bedrijven." }
      ],
      trendTitle: "Analyse van Belangrijkste Trends",
      trend: "De grootste variabele in Europese Web3-ontwikkeling is de volledige implementatie van MiCA. Eenmaal volledig van kracht in 2026, wordt compliance-capaciteit de belangrijkste competitieve factor. Duitsland, Frankrijk, Luxemburg en anderen met sterke financiële kracht en duidelijke regelgevingspaden zijn de belangrijkste winnaars.",
      ukNote: "Het Verenigd Koninkrijk kwam niet in de top tien. Hoewel Londen een actieve crypto-community heeft, zijn de scores voor regelgevingshelderheid en zakelijke vriendelijkheid lager dan de genoemde landen. - EACO Europa Groep"
    },

    footer: {
      disclaimer: "EACO is een AI+RWA+Web3 civisatie-modelproject. Dit is geen financieel advies. Alle prijsdoelen zijn aspiratieve mijlpalen.",
      rights: "Alle rechten voorbehouden.",
      links: "Snelle Links",
      community: "Community"
    }
  },

  // ============================================================
  // POLISH
  // ============================================================
  pl: {
    _meta: { name: "Polski", flag: "PL", dir: "ltr" },
    nav: {
      home: "Strona glowna",
      price: "Cele cenowe",
      gdp: "PKB Europy",
      assets: "Aktywa Plynne",
      model: "Model Cywilizacji",
      eci: "Indeks ECI",
      ai: "Moduly AI",
      roadmap: "Mapa drogowa",
      whitepaper: "Biala ksiega",
      web3: "Kraje Web3"
    },
    hero: {
      title: "Earth's Best Coin",
      subtitle: "Model Cywilizacji AI + RWA + Web3",
      tagline: "Energia x Postawa x Wspolpraca x Optymalizacja",
      cta: "Odkryj EACO",
      contract: "Adres kontraktu",
      website: "Oficjalna strona"
    },
    price: {
      title: "Cele cenowe EACO",
      subtitle: "Stopniowe kamienie milowe wartosci od pensa do premium",
      stages: [
        { name: "1 Pens funta", value: "L0.01", desc: "Faza budowy spolecznosci - wprowadzanie adopcji i swiadomosci" },
        { name: "1 Dime funta", value: "L0.10", desc: "Faza uzytecznosci - EACO zintegrowany z ekosystemami aktywow rzeczywistych" },
        { name: "1 Funt", value: "L1.00", desc: "Faza rozpoznania - EACO staje sie uznana jednostka cywilizacji cyfrowej" },
        { name: "10-20 Funtow", value: "L10-20", desc: "Faza instytucjonalna - adopcja instytucjonalna i integracja indeksu ECI" },
        { name: "100-200 Funtow", value: "L100-200", desc: "Faza globalnej rezerwy - EACO jako standard aktywa cywilizacji globalnej" }
      ],
      howToAchieve: "Jak osiagnac to krok po kroku",
      steps: [
        { phase: "Faza 1", title: "Fundament i Spolecznosc", time: "Miesiace 1-6", desc: "Budowa globalnej spolecznosci, wielojezyczna obecnosc, uruchomienie aplikacji webowej EACO i utworzenie poczatkowych puli plynnosci na Solana DEX." },
        { phase: "Faza 2", title: "Uzytecznosc i integracja RWA", time: "Miesiace 7-12", desc: "Polaczenie zrodel danych europejskich aktywow, budowa prototypu indeksu ECI, uruchomienie modulow AI do analizy danych, nawiazanie partnerstw z europejskimi platformami ESG." },
        { phase: "Faza 3", title: "Adopcja instytucjonalna", time: "Rok 2", desc: "Integracja z ramami zgodnymi z MiCA, uruchomienie produktow RWA klasy instytucjonalnej, osiagniecie listingow na platformach tier-1." },
        { phase: "Faza 4", title: "Globalne aktywo rezerwowe", time: "Rok 3+", desc: "Pelne wdrozenie modelu cywilizacji EACO, globalna adopcja indeksu ECI, EACO uznany jako najlepsza moneta AI+RWA+Web3 ziemi." }
      ]
    },
    gdp: {
      title: "Top 10 krajow Europy wedlug PKB",
      subtitle: "Prognoza MFW 2026 - rynki docelowe EACO",
      source: "Zrodlo: MFW World Economic Outlook 2026",
      tableHeader: ["Ranga", "Kraj", "PKB 2026 (Prognoza)", "Priorytet rynku"],
      countries: [
        { rank: 1, flag: "DE", name: "Niemcy", gdp: "$5.45T", priority: "Poziom 1" },
        { rank: 2, flag: "GB", name: "Wielka Brytania", gdp: "$4.26T", priority: "Poziom 1 - Rynek krajowy" },
        { rank: 3, flag: "FR", name: "Francja", gdp: "$3.60T", priority: "Poziom 1" },
        { rank: 4, flag: "IT", name: "Wlochy", gdp: "$2.74T", priority: "Poziom 2" },
        { rank: 5, flag: "RU", name: "Rosja", gdp: "$2.66T", priority: "Poziom 2" },
        { rank: 6, flag: "ES", name: "Hiszpania", gdp: "$2.09T", priority: "Poziom 2" },
        { rank: 7, flag: "NL", name: "Holandia", gdp: "$1.45T", priority: "Poziom 3" },
        { rank: 8, flag: "CH", name: "Szwajcaria", gdp: "$1.15T", priority: "Poziom 3" },
        { rank: 9, flag: "PL", name: "Polska", gdp: "$1.13T", priority: "Poziom 3" },
        { rank: 10, flag: "IE", name: "Irlandia", gdp: "$779.4B", priority: "Poziom 3" }
      ],
      insight: "Trzy najwieksze gospodarki (Niemcy, Wielka Brytania, Francja) lacznie przekraczaja 13 bilionow dolarow PKB. EACO celuje najpierw w te rynki dla maksymalnego wplywu."
    },
    assets: {
      title: "30 najmocniejszych klas plytnych aktywow Wielkiej Brytanii i Europy",
      subtitle: "Wedlug kategorii - nie indywidualna porada inwestycyjna",
      categories: [
        { icon: "B", name: "Waluta i ekwiwalenty gotowki", liquidity: "Bardzo wysoka", color: "blue", items: ["Gotowka GBP", "Gotowka EUR", "UK Gilts / EU T-Bills", "Fundusze rynku pieniezne", "Depozyty bankowe"] },
        { icon: "S", name: "Akcje", liquidity: "Bardzo wysoka", color: "green", items: ["UK FTSE 100", "EU STOXX 50", "UK FTSE 250", "Niemiecki DAX", "Francuski CAC 40"] },
        { icon: "B", name: "Obligacje", liquidity: "Wysoka", color: "purple", items: ["UK Gilts (dlugoterminowe)", "Niemieckie Bunds", "Francuskie OAT", "Obligacje korporacyjne UE grade inwestycyjny", "Obligacje wysokiego dochodu UE"] },
        { icon: "R", name: "Nieruchomosci", liquidity: "Srednio-wysoka", color: "orange", items: ["UK REITs", "Europejskie REITs", "Fundusze nieruchomosci komercyjnych", "Fundusze infrastruktury"] },
        { icon: "C", name: "Surowce", liquidity: "Wysoka", color: "amber", items: ["Ropa Brent", "Europejski gaz ziemny", "Zloto", "Srebro", "EU Carbon ETS"] },
        { icon: "D", name: "Aktywa cyfrowe", liquidity: "Wysoka", color: "cyan", items: ["EACO + SOL", "Bitcoin", "Ethereum", "Stablecoiny EUR", "Zgodne obligacje cyfrowe UE"] }
      ],
      tableTitle: "Podsumowanie: 30 najmocniejszych klas plytnych aktywow",
      table: {
        headers: ["Kategoria", "Plynnosc", "Przyklady"],
        rows: [
          ["Waluta", "Bardzo wysoka", "GBP, EUR, fundusze rynku pieniezne"],
          ["Akcje", "Bardzo wysoka", "FTSE 100, DAX, STOXX 50"],
          ["Obligacje", "Wysoka", "Bunds, Gilts, OAT"],
          ["Nieruchomosci", "Srednio-wysoka", "REITs, fundusze infrastruktury"],
          ["Surowce", "Wysoka", "Brent, gaz ziemny, zloto"],
          ["Aktywa cyfrowe", "Wysoka", "EACO+SOL, BTC, ETH, stablecoiny"]
        ]
      }
    },
    model: {
      title: "Model cywilizacji EACO",
      subtitle: "Energia x Postawa x Wspolpraca x Optymalizacja",
      intro: "Cztery glowne filary EACO, zintegrowane z europejskimi systemami aktywow, tworza komplementarny model cywilizacji.",
      pillars: [
        { letter: "E", name: "Energia", desc: "Zasilanie cywilizacji danymi zrownowazonej energii", euroLink: "EU ETS, dane europejskich zielonych funduszy, wskazniki transformacji energetycznej tworza modul Energii EACO", color: "green" },
        { letter: "A", name: "Postawa", desc: "Mentalnosc budowania najlepszej cywilizacji Ziemi", euroLink: "Europejski duch innowacji, mentalnosc przywodztwa ESG, podejscie zrownowazony rozwoj przede wszystkim", color: "blue" },
        { letter: "C", name: "Wspolpraca", desc: "Mechanizmy wspolpracy transgranicznej", euroLink: "Ramy transgranicznej wspolpracy UE, europejskie standardy regulacyjne, benchmarki ESG", color: "purple" },
        { letter: "O", name: "Optymalizacja", desc: "Ciągle doskonalenie poprzez AI i dane", euroLink: "Zgodnosc z EU AI Act, standardy MiCA, najbezpieczniejszy model AI+Web3 na swiecie", color: "orange" }
      ],
      integrationTitle: "5 glownych sciezek integracji",
      integrations: [
        { num: 1, title: "Europejskie aktywa jako kotwice RWA", desc: "Europejskie aktywa sluza jako zrodla danych aktywow rzeczywistych, modele kotwiczenia wartosci, zestawy treningowe AI i dane wejsciowe wskaznikow ekonomicznych dla EACO." },
        { num: 2, title: "Wspolpraca poprzez ramy UE", desc: "EACO przyjmuje mechanizmy transgranicznej wspolpracy UE, ramy regulacyjne, standardy ESG i systemy rynku wegla." },
        { num: 3, title: "ESG + modul Energii", desc: "Integracja EU ETS, danych europejskich zielonych funduszy i wskaznikow transformacji energetycznej w celu wzmocnienia modulu Energii EACO." },
        { num: 4, title: "Zgodnosc AI + aktywa cyfrowe", desc: "Wykorzystanie EU AI Act i ram MiCA do zbudowania najbardziej zgodnego modelu AI+Web3 na swiecie." },
        { num: 5, title: "Dane wejsciowe indeksu cywilizacji", desc: "Europejskie indeksy akcji, rentownosci obligacji, ceny energii, ceny wegla, indeks innowacji AI i plynnosc aktywow cyfrowych zasilaja ECI." }
      ]
    },
    eci: {
      title: "Indeks Cywilizacji Ziemi (ECI)",
      subtitle: "Wersja Web3 indeksu cywilizacji Ziemi",
      intro: "ECI to zlozony indeks zbudowany z kategorii europejskich aktywow, sluacy jako warstwa wartosci cywilizacji EACO.",
      components: [
        { name: "Europejskie indeksy akcji", weight: "20%", desc: "Dane wynikow FTSE 100, DAX, CAC 40, STOXX 50" },
        { name: "Rentownosci europejskich obligacji", weight: "20%", desc: "Krzywe rentownosci UK Gilts, niemieckich Bunds, francuskich OAT" },
        { name: "Ceny energii w Europie", weight: "15%", desc: "Ceny ropy Brent, gazu ziemnego, energii elektrycznej" },
        { name: "Ceny wegla UE", weight: "15%", desc: "Ceny pozowolen weglowych EU ETS" },
        { name: "Europejski indeks innowacji AI", weight: "15%", desc: "Patenty AI, inwestycje w B+R, aktywnosc startupow" },
        { name: "Plynnosc europejskich aktywow cyfrowych", weight: "15%", desc: "Wolumeny obrotu i plynnosc BTC, ETH, EACO" }
      ],
      formula: "ECI = 0.20 x IndeksAkcji + 0.20 x RentownoscObligacji + 0.15 x Energia + 0.15 x Wegiel + 0.15 x IndeksAI + 0.15 x PlynnoscCyfrowa"
    },
    ai: {
      title: "Architektura modulow AI EACO",
      subtitle: "Cztery moduly AI zgodne z modelem cywilizacji E-A-C-O",
      modules: [
        { name: "Modul AI-Energia", icon: "E", desc: "Przetwarzanie danych energetycznych w czasie rzeczywistym, ocena ESG, sledzenie sladu weglowego", inputs: ["Strumienie cen EU ETS", "Ceny Brent/Gaz", "Dane zielonej energii"], output: "Ocena temperatury ekonomicznej Ziemi", color: "green" },
        { name: "Modul AI-Postawa", icon: "A", desc: "Analiza sentymentu, sledzenie postawy rynku, metryki zdrowia spolecznosci", inputs: ["Sentyment mediow spolecznosciowych", "Analiza wiadomosci", "Zaangazowanie spolecznosci"], output: "Indeks postawy cywilizacji", color: "blue" },
        { name: "Modul AI-Wspolpraca", icon: "C", desc: "Monitorowanie wspolpracy transgranicznej, sledzenie zgodnosci regulacyjnej", inputs: ["Strumienie regulacyjne UE", "Dane handlu transgranicznego", "Wyniki zgodnosci ESG"], output: "Ocena zdrowia wspolpracy", color: "purple" },
        { name: "Modul AI-Optymalizacja", icon: "O", desc: "Ciagla optymalizacja modelu, zarzadzanie ryzykiem, analiza predykcyjna", inputs: ["Dane zgodnosci MiCA", "Dopasowanie AI Act", "Wskazniki ryzyka rynkowego"], output: "Rekomendacje optymalizacji", color: "orange" }
      ],
      flowTitle: "Architektura przeplywu danych AI",
      flow: ["Pobieranie danych", "Przetwarzanie wstepne i walidacja", "Trening modelu AI", "Obliczanie indeksu cywilizacji", "Mapowanie wartosci on-chain", "Odbicie wartosci tokena EACO"]
    },
    roadmap: {
      title: "Mapa drogowa rozwoju EACO",
      subtitle: "Od integracji danych do globalnego aktywa cywilizacji",
      threeStepTitle: "Strategiczna mapa drogowa w 3 krokach",
      threeSteps: [
        { step: "Krok 1", title: "Integracja danych", time: "Najlatwiej - Natychmiast", desc: "Polaczenie europejskich indeksow akcji, rentownosci obligacji, cen wegla i energii w celu utworzenia warstwy danych cywilizacji EACO.", layer: "Warstwa danych cywilizacji" },
        { step: "Krok 2", title: "Trening modelu AI", time: "Srednioterminowo", desc: "Trenowanie modulu Energii danymi ESG, modulu Wspolpracy ramami UE, modulu Optymalizacji systemami regulacyjnymi w celu utworzenia warstwy AI cywilizacji EACO.", layer: "Warstwa AI cywilizacji" },
        { step: "Krok 3", title: "Mapowanie wartosci Web3", time: "Dlugoterminowo", desc: "Mapowanie kategorii europejskich aktywow na indeks wartosci cywilizacji EACO, tworzac globalny model kotwiczenia cywilizacji Earth E (EACO).", layer: "Warstwa globalnych aktywow cywilizacji" }
      ],
      twelveMonthTitle: "Mapa drogowa rozwoju na 12 miesiecy",
      months: [
        { month: "M1-M2", title: "Uruchomienie strony i spolecznosci", desc: "Uruchomienie wielojezycznej strony, utworzenie kanalow globalnej spolecznosci, poczatkowa plynnosc DEX na Solana" },
        { month: "M3-M4", title: "Integracja zrodel danych", desc: "Integracja API cen europejskich akcji/obligacji/energii/wegla, budowa potoku danych ECI" },
        { month: "M5-M6", title: "Prototyp indeksu ECI", desc: "Uruchomienie prototypu indeksu ECI, publikacja bialej ksiigi v1.0, rozpoczecie rozwoju modulow AI" },
        { month: "M7-M8", title: "Beta modulow AI", desc: "Wdrozenie modulow AI-Energia i AI-Wspolpraca, partnerstwo z dostawcami danych ESG" },
        { month: "M9-M10", title: "Uruchomienie produktow RWA", desc: "Uruchomienie produktow opartych na RWA, przygotowanie zgodnosci MiCA, wnioski o notowanie na gieldach" },
        { month: "M11-M12", title: "Pelen ekosystem", desc: "Pelne wdrozenie modulow AI, indeks ECI na zywo, partnerstwa instytucjonalne, globalna ekspansja" }
      ]
    },
    whitepaper: {
      title: "Struktura bialej ksiigi EACO",
      subtitle: "Kompletny zakres bialej ksiigi dla EACO x aktywa europejskie",
      sections: [
        { num: "1", title: "Podsumowanie wykonawcze", desc: "Wizja, misja i propozycja wartosci EACO jako Earth's Best Coin" },
        { num: "2", title: "Model cywilizacji EACO", desc: "Szczegolowe ramy Energia x Postawa x Wspolpraca x Optymalizacja" },
        { num: "3", title: "Krajobraz europejskich aktywow", desc: "Top 10 krajow PKB, 30 klas plytnych aktywow, analiza rynku" },
        { num: "4", title: "Indeks Cywilizacji Ziemi ECI", desc: "Konstrukcja indeksu, metodologia wagowa, zrodla danych" },
        { num: "5", title: "Projekt modulow AI", desc: "Architektura czterech modulow AI, metodologia treningu, plan wdrozenia" },
        { num: "6", title: "Ramy integracji RWA", desc: "Tokenizacja aktywow rzeczywistych, kotwiczenie europejskich aktywow, zgodnosc" },
        { num: "7", title: "Architektura Web3", desc: "Blockchain Solana, inteligentne kontrakty, tokenomia, zarzadzanie" },
        { num: "8", title: "Zgodnosc regulacyjna", desc: "Zgodnosc z MiCA, zgodnosc z EU AI Act, transgraniczne ramy prawne" },
        { num: "9", title: "Mapa drogowa i kamienie milowe", desc: "Strategiczna mapa drogowa w 3 krokach, plan rozwoju na 12 miesiecy, dlugoterminowa wizja" },
        { num: "10", title: "Tokenomia i cele cenowe", desc: "Dystrybucja tokenow, model uzytecznosci, strategia kamieni milowych ceny" },
        { num: "11", title: "Analiza ryzyka", desc: "Ryzyka rynkowe, regulacyjne, techniczne, strategie lagodzenia" },
        { num: "12", title: "Wnioski i wizja", desc: "EACO jako najlepsza moneta cywilizacji AI+RWA+Web3 Ziemi" }
      ]
    },
    web3: {
      title: "Top 10 Europejskich Krajow Przyjaznych Web3",
      subtitle: "Grupa Europa EACO - Kluczowe rynki dla adopcji Web3 i krypto",
      tableHeader: ["Ranga", "Kraj", "Kluczowe przewagi i uzasadnienie"],
      countries: [
        { rank: 1, flag: "DE", name: "Niemcy", advantage: "Centrum zgodnosci i lider infrastruktury finansowej. Posiada najwiecej licencji MiCA w UE (57), prawie cwierc calosci. Zintegrowal krypto w ugruntowane ramy finansowe przed MiCA, zapewniajac jasna sciezke dla regulowanych firm krypto." },
        { rank: 2, flag: "CH", name: "Szwajcaria", advantage: "\"Crypto Valley\" i hub innowacji. Crypto Valley w Zug to jeden z najwczesniejszych klastrow blockchain na swiecie. Jasne i wspomagajace ramy regulacyjne, przyciagajace ponad 900 zarejestrowanych firm krypto." },
        { rank: 3, flag: "FR", name: "Francja", advantage: "Strategiczne wsparcie rzadu. Otrzymala 26 licencji MiCA, drugie miejsce w UE. Rzad okreslil blockchain jako obszar kluczowy poprzez plan \"Francja 2030\", promujac implementacje Web3." },
        { rank: 4, flag: "LU", name: "Luksemburg", advantage: "Instytucjonalne centrum finansowe. Stabilny system finansowy (rating AAA), ogromny ekosystem funduszy (ok. 8,29 biliona euro). Coinbase i inni giganci wybrali go jako europejskie centrum operacji MiCA." },
        { rank: 5, flag: "MT", name: "Malta", advantage: "\"Wyspa Blockchain\". Uchwalila ustawodawstwo blockchain juz w 2018, jeden z pierwszych europejskich krajow z kompleksowymi ramami prawnymi dla krypto. Jej krajowe ramy VFA sa scisle zgodne z MiCA." },
        { rank: 6, flag: "EE", name: "Estonia", advantage: "Pionier rzadu cyfrowego. Unikalny program e-Residency i dojrzaly system tozsamosci cyfrowej. Choc regulacje sie zaostrzyly, ramy pozostaja atrakcyjne dla firm krypto." },
        { rank: 7, flag: "NL", name: "Holandia", advantage: "Otwarta atmosfera technologii i innowacji. Amsterdam stal sie waznym wezlem dla DeFi i DePIN. Otwarty klimat biznesowy przyciagnal wiele startupow Web3." },
        { rank: 8, flag: "IT", name: "Wlochy", advantage: "Wysoka aktywnosc rynku. Wysokie wyniki w globalnych rankingach krypto-przyjaznosci, z wybitna akceptacja platnosci krypto. Juz ponad 73 zarejestrowanych dostawcow uslug krypto." },
        { rank: 9, flag: "PT", name: "Portugalia", advantage: "Korzysci podatkowe (podlegajace nowym politykom). Wczesniej \"raj dla cyfrowych nomadow\" ze zwolnieniem z podatku od zyskow kapitalowych krypto, choc ta korzysc maleje. Obecnie w fazie przejsciowej." },
        { rank: 10, flag: "IE", name: "Irlandia", advantage: "Hub aktywow finansowych. Razem z Niemcami, Francja, Holandia i Luksemburgiem koncentruje okolo 72% aktywow finansowych UE. Jako tradycyjne miedzynarodowe centrum finansowe, staje sie wazna brama dla firm krypto." }
      ],
      trendTitle: "Analiza Kluczowych Trendow",
      trend: "Najwieksza zmienna w europejskim rozwoju Web3 jest pelna implementacja MiCA. Po pelnym wejsciu w zycie w 2026, zdolnosc do zgodnosci staje sie kluczowym czynnikiem konkurencyjnym. Niemcy, Francja, Luksemburg i inne kraje z silna baza finansowa i jasnymi sciezkami regulacyjnymi sa glownymi wygrancami.",
      ukNote: "Wielka Brytania nie weszla do pierwszej dziesiatki. Choc Londyn ma aktywna spolecznosc krypto, jej wyniki jasnosci regulacyjnej i przyjaznosci biznesowej sa nizsze niz wymienione kraje. - Grupa Europa EACO"
    },

    footer: {
      disclaimer: "EACO to projekt modelu cywilizacji AI+RWA+Web3. To nie jest porada finansowa. Wszystkie cele cenowe sa aspiracyjnymi kamieniami milowymi.",
      rights: "Wszelkie prawa zastrzezone.",
      links: "Szybkie linki",
      community: "Spolecznosc"
    }
  }
};
