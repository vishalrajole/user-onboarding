const getMessages = async (locale = "default") => {
  try {
    const messages = await import(`../__translations__/${locale}.json`);
    return messages.default;
  } catch (error) {
    console.warn(`Didn't find supported ${locale} json `);
    return {};
  }
};

export default getMessages;
