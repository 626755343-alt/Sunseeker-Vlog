Warning: truncated output (original token count: 2138)
Total output lines: 59

const topicSeeds = [
  ['生活', 'your morning routine', '你的早晨习惯', ['morning', 'habit', 'energy']], ['生活', 'a small surprise today', '今天的小惊喜', ['surprise', 'today', 'moment']], ['生活', 'your favorite corner at home', '家里最喜欢的角落', ['home', 'corner', 'comfortable']], ['生活', 'a meal you remember', '一顿难忘的饭', ['meal', 'taste', 'memory']], […1938 tokens truncated…log, current, random = Math.random) {
  const withoutCurrent = catalog.filter((prompt) => prompt.id !== current?.id);
  const differentCategory = withoutCurrent.filter((prompt) => prompt.category !== current?.category);
  const choices = differentCategory.length > 0 ? differentCategory : withoutCurrent.length ? withoutCurrent : catalog;
  return choices[Math.floor(random() * choices.length)];
}

