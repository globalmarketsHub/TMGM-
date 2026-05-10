const users = {
  trainee: { password: "tmgm2026", role: "学员" },
  admin: { password: "tmgm2026", role: "CRM 管理" },
};

const sourceLinks = [
  { label: "TMGM Trading Leverage", url: "https://www.tmgm.com/en/trading/trading-leverage" },
  { label: "TMGM Gold Product Page", url: "https://www.tmgm.com/en/trading/precious-metals/gold" },
  { label: "TMGM Trading Conditions", url: "https://www.tmgm.com/en/trading/trading-conditions" },
];

const days = [
  {
    day: 1,
    title: "产品基础与保证金",
    badge: "外汇 / 黄金 / 虚拟币 / 原油",
    summary: "先把交易品种、合约、杠杆、保证金、最小最大手数、隔夜费讲清楚。",
    sections: [
      {
        heading: "当天目标",
        html: `<ul>
          <li>知道外汇、黄金、虚拟币、原油 CFD 的基本交易逻辑。</li>
          <li>能用合约大小、交易手数、价格和杠杆计算名义价值与保证金。</li>
          <li>能向客户解释最小开仓、最大开仓、杠杆调整和隔夜库存费。</li>
          <li>知道公开页面数据可能随监管实体、服务器和市场事件调整，实际答复以后台产品规格为准。</li>
        </ul>`,
      },
      {
        heading: "核心概念",
        html: `<p>外汇交易的是两个货币之间的汇率，例如 EURUSD；黄金常见代码是 XAUUSD，报价单位通常是美元/盎司；原油是能源 CFD；虚拟币 CFD 交易的是币价涨跌，不等于拥有链上资产。</p>
        <div class="formula-card">名义价值 = 合约大小 x 手数 x 市场价格<br>保证金 = 名义价值 / 杠杆<br>盈亏 = 价格变动 x 合约大小 x 手数，具体还要考虑报价货币换算、点差、佣金和隔夜费。</div>`,
      },
      {
        heading: "公开资料里可先使用的规格",
        html: `<div class="spec-grid">
          <div class="spec-item"><span>XAUUSD 合约大小</span><strong>100 盎司 / 1 手</strong></div>
          <div class="spec-item"><span>XAUUSD 最小手数</span><strong>0.01 手</strong></div>
          <div class="spec-item"><span>XAUUSD 最大手数</span><strong>80 手</strong></div>
          <div class="spec-item"><span>XAUUSD 杠杆</span><strong>最高可到 1:1000，随账户设置与风险规则调整</strong></div>
          <div class="spec-item"><span>黄金三倍库存</span><strong>公开页显示 Wednesday</strong></div>
          <div class="spec-item"><span>周末/节假日前调整</span><strong>黄金 1:50，原油 1:10，新仓适用</strong></div>
        </div>`,
      },
      {
        heading: "例题 1：黄金保证金",
        html: `<p>客户开 0.1 手 XAUUSD，价格 2,000，合约大小 100 盎司，杠杆 1:20。名义价值 = 100 x 0.1 x 2,000 = 20,000 美元；保证金 = 20,000 / 20 = 1,000 美元。</p>`,
      },
      {
        heading: "例题 2：外汇保证金",
        html: `<p>客户开 1 手 EURUSD，合约大小 100,000 欧元，EURUSD 价格 1.0800，杠杆 1:500。名义价值 = 100,000 x 1 x 1.0800 = 108,000 美元；保证金 = 108,000 / 500 = 216 美元。</p>`,
      },
      {
        heading: "例题 3：隔夜费表达",
        html: `<p>库存费通常按持仓方向、产品库存点数、手数和持仓天数计算，周三或指定日期可能出现三倍库存。对客户说明时要避免承诺固定金额，应引导查看平台当日规格和交易确认。</p>`,
      },
      {
        heading: "资料来源",
        html: `<ul>${sourceLinks.map((item) => `<li><a href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a></li>`).join("")}</ul>`,
      },
    ],
    quiz: [
      {
        q: "0.1 手 XAUUSD，价格 2,000，合约大小 100，杠杆 1:20，需要多少保证金？",
        options: ["100 美元", "1,000 美元", "2,000 美元", "20,000 美元"],
        answer: 1,
      },
      {
        q: "向客户解释虚拟币 CFD 时，哪句话更合适？",
        options: ["客户拥有链上币", "只交易价格波动，不等于拥有底层资产", "没有隔夜风险", "永远不会滑点"],
        answer: 1,
      },
      {
        q: "公开资料显示 XAUUSD 1 手合约大小是多少？",
        options: ["1 盎司", "10 盎司", "100 盎司", "1000 盎司"],
        answer: 2,
      },
    ],
  },
  {
    day: 2,
    title: "平台开户与 KYC",
    badge: "开户流程",
    summary: "掌握开户链接、资料提交、KYC 状态和常见驳回原因。",
    sections: makeGenericSections("开户资料、身份认证、地址证明、风险披露", "新人要能判断客户卡在哪一步，并给出下一步动作。"),
    quiz: makeGenericQuiz("KYC 驳回后应先确认驳回原因，再指导客户补充对应材料。"),
  },
  {
    day: 3,
    title: "入金出金与资金安全",
    badge: "支付流程",
    summary: "理解入金渠道、到账时间、出金审核、同名原则和异常升级。",
    sections: makeGenericSections("入金、出金、同名原则、到账时效", "重点是减少客户焦虑，同时不越权承诺到账。"),
    quiz: makeGenericQuiz("资金问题不能承诺固定到账时间，应按渠道和审核状态解释。"),
  },
  {
    day: 4,
    title: "交易平台 MT4 / MT5",
    badge: "平台操作",
    summary: "会登录、找服务器、看规格、下单、平仓、查历史、看日志。",
    sections: makeGenericSections("服务器、产品规格、订单类型、交易历史", "每天都要让新人实际操作，不只看说明。"),
    quiz: makeGenericQuiz("产品规格应在平台内核对，不能只靠记忆回答客户。"),
  },
  {
    day: 5,
    title: "客户沟通与异议处理",
    badge: "销售服务",
    summary: "训练需求澄清、风险提示、投诉安抚、升级边界。",
    sections: makeGenericSections("客户画像、需求澄清、异议回应、升级机制", "话术要专业、克制、可审计。"),
    quiz: makeGenericQuiz("涉及收益承诺、投资建议或投诉时，需要按合规边界处理。"),
  },
  {
    day: 6,
    title: "风控与合规",
    badge: "合规底线",
    summary: "理解高风险话术、保证金预警、强平逻辑、监管差异。",
    sections: makeGenericSections("风险披露、保证金水平、强平、监管实体", "合规不是背条款，而是知道哪些话绝对不能说。"),
    quiz: makeGenericQuiz("不能向客户承诺盈利，也不能淡化杠杆风险。"),
  },
  {
    day: 7,
    title: "模拟实战",
    badge: "情景演练",
    summary: "把开户、入金、产品、平台和风控串成完整客户旅程。",
    sections: makeGenericSections("客户旅程、模拟电话、聊天记录、复盘评分", "让新人完成一条端到端服务路线。"),
    quiz: makeGenericQuiz("实战复盘要看事实、话术、合规和下一步动作。"),
  },
  {
    day: 8,
    title: "结业考核与交接",
    badge: "上岗准备",
    summary: "综合笔试、情景面试、CRM 交接、后续带教计划。",
    sections: makeGenericSections("结业考试、主管面谈、CRM 交接、带教计划", "通过后进入试岗，未通过则补训对应模块。"),
    quiz: makeGenericQuiz("结业通过应基于知识、实操、合规和 CRM 记录综合判断。"),
  },
];

let state = {
  currentUser: null,
  currentDay: 1,
  visibleSeconds: 0,
  activeSeconds: 0,
  lastTick: Date.now(),
  lastInteraction: Date.now(),
};

const els = {
  loginView: document.querySelector("#loginView"),
  dashboardView: document.querySelector("#dashboardView"),
  loginForm: document.querySelector("#loginForm"),
  loginError: document.querySelector("#loginError"),
  username: document.querySelector("#username"),
  password: document.querySelector("#password"),
  dayNav: document.querySelector("#dayNav"),
  routeRail: document.querySelector("#routeRail"),
  pageTitle: document.querySelector("#pageTitle"),
  dayTag: document.querySelector("#dayTag"),
  lessonTitle: document.querySelector("#lessonTitle"),
  lessonBadge: document.querySelector("#lessonBadge"),
  lessonBody: document.querySelector("#lessonBody"),
  quizForm: document.querySelector("#quizForm"),
  quizResult: document.querySelector("#quizResult"),
  visibleTime: document.querySelector("#visibleTime"),
  activeTime: document.querySelector("#activeTime"),
  roleLabel: document.querySelector("#roleLabel"),
  crmPanel: document.querySelector("#crmPanel"),
  crmTable: document.querySelector("#crmTable"),
  metricGrid: document.querySelector("#metricGrid"),
  logoutBtn: document.querySelector("#logoutBtn"),
  exportBtn: document.querySelector("#exportBtn"),
};

function makeGenericSections(keywords, note) {
  return [
    {
      heading: "当天目标",
      html: `<p>${note}</p><ul>${keywords.split("、").map((item) => `<li>${item}</li>`).join("")}</ul>`,
    },
    {
      heading: "例题",
      html: `<p>主管给出一个真实客户场景，学员需要判断客户当前状态、下一步动作、风险提示和 CRM 记录方式。</p>`,
    },
    {
      heading: "待补充",
      html: `<p>这里先预留内容位，后续可按你的内部教材、话术和流程继续扩展。</p>`,
    },
  ];
}

function makeGenericQuiz(answerText) {
  return [
    {
      q: "下面哪种处理方式更符合岗培要求？",
      options: [answerText, "先承诺客户结果，再回头确认", "跳过记录，口头处理即可", "不确认身份也可以讨论账户细节"],
      answer: 0,
    },
  ];
}

function init() {
  els.loginForm.addEventListener("submit", handleLogin);
  els.logoutBtn.addEventListener("click", logout);
  els.exportBtn.addEventListener("click", exportCrm);
  ["click", "keydown", "mousemove", "scroll", "touchstart"].forEach((eventName) => {
    window.addEventListener(eventName, markInteraction, { passive: true });
  });
  window.setInterval(trackTime, 1000);
  renderNavigation();
  renderRoute();
  renderDay(1);
}

function handleLogin(event) {
  event.preventDefault();
  const username = els.username.value.trim();
  const candidate = users[username];
  if (!candidate || candidate.password !== els.password.value) {
    els.loginError.textContent = "账号或密码不正确";
    return;
  }
  state.currentUser = { username, role: candidate.role };
  state.visibleSeconds = 0;
  state.activeSeconds = 0;
  state.lastTick = Date.now();
  state.lastInteraction = Date.now();
  els.roleLabel.textContent = candidate.role;
  els.loginView.classList.add("is-hidden");
  els.dashboardView.classList.remove("is-hidden");
  renderCrm();
}

function logout() {
  state.currentUser = null;
  els.password.value = "";
  els.dashboardView.classList.add("is-hidden");
  els.loginView.classList.remove("is-hidden");
}

function renderNavigation() {
  els.dayNav.innerHTML = days
    .map(
      (day) => `<button class="day-link" data-day="${day.day}">
        <strong>D${day.day}</strong>
        <span>${day.title}</span>
      </button>`,
    )
    .join("");
  els.dayNav.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => renderDay(Number(button.dataset.day)));
  });
}

function renderRoute() {
  els.routeRail.innerHTML = days
    .map(
      (day) => `<button class="route-step" data-day="${day.day}">
        <strong>${day.day}</strong>
        <span>${day.summary}</span>
      </button>`,
    )
    .join("");
  els.routeRail.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => renderDay(Number(button.dataset.day)));
  });
}

function renderDay(dayNumber) {
  state.currentDay = dayNumber;
  const day = days.find((item) => item.day === dayNumber);
  els.pageTitle.textContent = `第 ${day.day} 天：${day.title}`;
  els.dayTag.textContent = `Day ${day.day}`;
  els.lessonTitle.textContent = day.title;
  els.lessonBadge.textContent = day.badge;
  els.lessonBody.innerHTML = day.sections
    .map((section) => `<section class="lesson-section"><h4>${section.heading}</h4>${section.html}</section>`)
    .join("");
  renderQuiz(day);
  document.querySelectorAll(".day-link").forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.day) === dayNumber);
  });
}

function renderQuiz(day) {
  els.quizResult.classList.add("is-hidden");
  els.quizForm.innerHTML = `${day.quiz
    .map(
      (question, questionIndex) => `<div class="question">
        <p>${questionIndex + 1}. ${question.q}</p>
        ${question.options
          .map(
            (option, optionIndex) => `<label class="option">
              <input type="radio" name="q${questionIndex}" value="${optionIndex}" required />
              <span>${option}</span>
            </label>`,
          )
          .join("")}
      </div>`,
    )
    .join("")}<button type="submit">提交小测</button>`;
  els.quizForm.onsubmit = (event) => submitQuiz(event, day);
}

function submitQuiz(event, day) {
  event.preventDefault();
  const data = new FormData(els.quizForm);
  let correct = 0;
  day.quiz.forEach((question, index) => {
    if (Number(data.get(`q${index}`)) === question.answer) correct += 1;
  });
  const score = Math.round((correct / day.quiz.length) * 100);
  const record = {
    user: state.currentUser?.username || "访客",
    role: state.currentUser?.role || "未登录",
    day: day.day,
    title: day.title,
    score,
    visibleSeconds: state.visibleSeconds,
    activeSeconds: state.activeSeconds,
    activityRate: getActivityRate(),
    submittedAt: new Date().toLocaleString("zh-CN"),
  };
  const records = getRecords();
  records.unshift(record);
  localStorage.setItem("tmgmTrainingCrm", JSON.stringify(records.slice(0, 200)));
  els.quizResult.textContent = `已同步到 CRM：${score} 分，真实操作占比 ${record.activityRate}%`;
  els.quizResult.classList.remove("is-hidden");
  renderCrm();
}

function getRecords() {
  try {
    return JSON.parse(localStorage.getItem("tmgmTrainingCrm") || "[]");
  } catch {
    return [];
  }
}

function renderCrm() {
  const records = getRecords();
  const completed = new Set(records.map((item) => `${item.user}-${item.day}`)).size;
  const avgScore = records.length ? Math.round(records.reduce((sum, item) => sum + item.score, 0) / records.length) : 0;
  const avgActivity = records.length ? Math.round(records.reduce((sum, item) => sum + item.activityRate, 0) / records.length) : 0;
  els.metricGrid.innerHTML = [
    ["提交记录", records.length],
    ["完成模块", completed],
    ["平均分", `${avgScore} 分`],
    ["平均活跃度", `${avgActivity}%`],
  ]
    .map(([label, value]) => `<div class="metric"><span>${label}</span><strong>${value}</strong></div>`)
    .join("");
  els.crmTable.innerHTML =
    records
      .map(
        (item) => `<tr>
          <td>${item.user}</td>
          <td>Day ${item.day}</td>
          <td>${item.score}</td>
          <td>${formatTime(item.visibleSeconds)}</td>
          <td>${formatTime(item.activeSeconds)}</td>
          <td>${item.activityRate}%</td>
          <td>${item.submittedAt}</td>
        </tr>`,
      )
      .join("") || `<tr><td colspan="7">暂无测验记录</td></tr>`;
}

function trackTime() {
  if (!state.currentUser) return;
  const now = Date.now();
  const delta = Math.max(0, Math.round((now - state.lastTick) / 1000));
  state.lastTick = now;
  if (!document.hidden) {
    state.visibleSeconds += delta;
    if (now - state.lastInteraction < 20000) state.activeSeconds += delta;
  }
  els.visibleTime.textContent = formatTime(state.visibleSeconds);
  els.activeTime.textContent = formatTime(state.activeSeconds);
}

function markInteraction() {
  state.lastInteraction = Date.now();
}

function getActivityRate() {
  if (!state.visibleSeconds) return 0;
  return Math.min(100, Math.round((state.activeSeconds / state.visibleSeconds) * 100));
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function exportCrm() {
  const payload = JSON.stringify(getRecords(), null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "tmgm-training-crm.json";
  link.click();
  URL.revokeObjectURL(url);
}

init();
