const topicSeeds = [
  ['生活', 'your morning routine', '你的早晨习惯', ['morning', 'habit', 'energy']], ['生活', 'a small surprise today', '今天的小惊喜', ['surprise', 'today', 'moment']], ['生活', 'your favorite corner at home', '家里最喜欢的角落', ['home', 'corner', 'comfortable']], ['生活', 'a meal you remember', '一顿难忘的饭', ['meal', 'taste', 'memory']], ['生活', 'something in your bag', '包里的一样东西', ['bag', 'useful', 'carry']], ['生活', 'the weather outside', '此刻的天气', ['weather', 'sky', 'feel']], ['生活', 'a sound you can hear', '你听到的一种声音', ['sound', 'listen', 'notice']], ['生活', 'your walk home', '回家的路', ['walk', 'street', 'notice']], ['生活', 'your favorite snack', '最喜欢的零食', ['snack', 'taste', 'share']], ['生活', 'a useful app', '一个实用的应用', ['app', 'phone', 'daily']], ['生活', 'a photo you like', '一张你喜欢的照片', ['photo', 'memory', 'smile']], ['生活', 'one thing that saves you time', '帮你节省时间的东西', ['time', 'useful', 'simple']],
  ['校园', 'a class that surprised you', '一堂让你惊喜的课', ['class', 'learn', 'interesting']], ['校园', 'a helpful classmate', '一位有帮助的同学', ['classmate', 'kind', 'help']], ['校园', 'your favorite school place', '校园最喜欢的地方', ['school', 'place', 'relax']], ['校园', 'your study break', '你的学习间隙', ['break', 'study', 'focus']], ['校园', 'a subject you want to improve', '想提高的一门学科', ['subject', 'practice', 'improve']], ['校园', 'a teacher who inspires you', '启发你的老师', ['teacher', 'inspire', 'learn']], ['校园', 'a group project', '一次小组作业', ['team', 'project', 'together']], ['校园', 'your desk or workspace', '你的书桌或学习区', ['desk', 'space', 'organize']], ['校园', 'a school rule', '一条校园规则', ['rule', 'school', 'fair']], ['校园', 'a skill you learned recently', '最近学会的技能', ['skill', 'practice', 'progress']], ['校园', 'a question for your teacher', '最想问老师的问题', ['question', 'curious', 'answer']], ['校园', 'your ideal school club', '理想的社团', ['club', 'join', 'fun']],
  ['观点', 'whether rainy days are good', '下雨天好不好', ['rainy', 'mood', 'prefer']], ['观点', 'listening to music while studying', '学习时听音乐', ['music', 'study', 'focus']], ['观点', 'being an early bird or a night owl', '早起还是熬夜', ['early', 'night', 'energy']], ['观点', 'the best kind of gift', '最好的礼物', ['gift', 'thoughtful', 'memory']], ['观点', 'one phone rule you would make', '你会制定的一条手机规则', ['phone', 'rule', 'balance']], ['观点', 'whether kindness is a superpower', '善良是不是超能力', ['kind', 'action', 'change']], ['观点', 'more free time or more money', '更多时间还是更多钱', ['time', 'money', 'choose']], ['观点', 'the best way to relax', '最好的放松方式', ['relax', 'rest', 'weekend']], ['观点', 'whether homework should be shorter', '作业是否应更少', ['homework', 'time', 'opinion']], ['观点', 'the best season of the year', '一年中最好的季节', ['season', 'weather', 'reason']], ['观点', 'what makes a good friend', '好朋友的标准', ['friend', 'trust', 'support']], ['观点', 'whether mistakes are useful', '错误有没有价值', ['mistake', 'learn', 'try']],
  ['想象', 'a door to anywhere', '一扇通往任何地方的门', ['door', 'travel', 'choose']], ['想象', 'a pet that can talk', '一只会说话的宠物', ['pet', 'talk', 'secret']], ['想象', 'visiting the past or the future', '去过去还是未来', ['past', 'future', 'visit']], ['想象', 'a gentle superpower', '一个温和的超能力', ['power', 'help', 'everyday']], ['想象', 'three things for an island', '荒岛上带的三样东西', ['island', 'bring', 'survive']], ['想象', 'a useful magic button', '一个实用魔法按钮', ['button', 'magic', 'problem']], ['想象', 'the title of your life movie', '你人生电影的标题', ['movie', 'title', 'character']], ['想象', 'today as a color', '今天像什么颜色', ['color', 'feeling', 'picture']], ['想象', 'a city in the clouds', '云端城市', ['city', 'cloud', 'imagine']], ['想象', 'your dream invention', '梦想中的发明', ['invent', 'future', 'useful']], ['想象', 'a message from future you', '未来的你发来的消息', ['future', 'message', 'advice']], ['想象', 'a day without gravity', '没有重力的一天', ['gravity', 'fun', 'different']],
  ['心情', 'one thing you feel grateful for', '感恩的一件事', ['grateful', 'thank', 'notice']], ['心情', 'what gives you energy', '给你能量的事', ['energy', 'happy', 'recharge']], ['心情', 'a time you were a little brave', '一次小小的勇敢', ['brave', 'try', 'nervous']], ['心情', 'what made you smile recently', '最近让你微笑的事', ['smile', 'recently', 'simple']], ['心情', 'how you reset after a hard day', '累了一天后怎样恢复', ['reset', 'tired', 'calm']], ['心情', 'a compliment for yourself', '夸夸自己', ['compliment', 'strength', 'today']], ['心情', 'one small thing you look forward to', '期待的一件小事', ['hope', 'tomorrow', 'excited']], ['心情', 'a place that makes you calm', '让你平静的地方', ['calm', 'place', 'peaceful']], ['心情', 'a person you miss', '你想念的一个人', ['person', 'miss', 'memory']], ['心情', 'a tiny goal for tomorrow', '明天的一个小目标', ['goal', 'tomorrow', 'step']], ['心情', 'something you are proud of', '让你自豪的一件事', ['proud', 'effort', 'grow']], ['心情', 'a kind thing you can do today', '今天能做的一件善意小事', ['kind', 'today', 'action']],
];

const promptFrames = [
  { id: 'story', title: (topic) => `Tell a story about ${topic}`, translation: (zh) => `讲讲${zh}的一段故事`, starter: 'A small story I want to share is...', challenge: 'What happened next?' },
  { id: 'describe', title: (topic) => `Describe ${topic}`, translation: (zh) => `描述一下${zh}`, starter: 'When I think about this, I can see...', challenge: 'What detail makes it special?' },
  { id: 'why', title: (topic) => `Why does ${topic} matter to you?`, translation: (zh) => `为什么${zh}对你重要？`, starter: 'This matters to me because...', challenge: 'How does it affect your day?' },
  { id: 'change', title: (topic) => `If you could change one thing about ${topic}`, translation: (zh) => `如果能改变${zh}的一点`, starter: 'If I could change one thing, I would...', challenge: 'What would become better?' },
  { id: 'advice', title: (topic) => `Give advice about ${topic}`, translation: (zh) => `关于${zh}，给出你的建议`, starter: 'My advice would be...', challenge: 'Who could use this advice?' },
];

export const promptCatalog = topicSeeds.flatMap(([category, topic, translation, keywords]) =>
  promptFrames.map((frame) => ({
    id: `${category}-${frame.id}-${topic.replaceAll(/[^a-z0-9]+/gi, '-').replaceAll(/^-|-$/g, '')}`,
    category,
    title: frame.title(topic),
    translation: frame.translation(translation),
    keywords,
    starter: frame.starter,
    challenge: frame.challenge,
  })),
);

export function createPromptDeck(catalog, current = null, random = Math.random) {
  const deck = [...catalog];
  for (let index = deck.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [deck[index], deck[swapIndex]] = [deck[swapIndex], deck[index]];
  }
  if (current && deck.length > 1 && deck[0].id === current.id) {
    const replacementIndex = deck.findIndex((prompt) => prompt.id !== current.id);
    [deck[0], deck[replacementIndex]] = [deck[replacementIndex], deck[0]];
  }
  return deck;
}

export function drawNextPrompt(remainingDeck, catalog, current = null, random = Math.random) {
  const deck = remainingDeck.length > 0
    ? remainingDeck
    : createPromptDeck(catalog, current, random);

  return {
    prompt: deck[0],
    remainingDeck: deck.slice(1),
  };
}

export function selectPrompt(catalog, current, random = Math.random) {
  const withoutCurrent = catalog.filter((prompt) => prompt.id !== current?.id);
  const differentCategory = withoutCurrent.filter((prompt) => prompt.category !== current?.category);
  const choices = differentCategory.length > 0 ? differentCategory : withoutCurrent.length ? withoutCurrent : catalog;
  return choices[Math.floor(random() * choices.length)];
}

