const parseContactType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const isType = (type) => ['work', 'home', 'personal'].includes(type);

  if (isType(type)) return type;
};

const parseIsFavourite = (isFavourite) => {
  if (isFavourite?.toLowerCase() === 'true') return true;
  if (isFavourite?.toLowerCase() === 'false') return false;
  return undefined;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseContactType(contactType);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  const filter = {};
  if (parsedContactType) filter.contactType = parsedContactType;
  if (parsedIsFavourite !== undefined) filter.isFavourite = parsedIsFavourite;

  return {
    contactType: parsedContactType,
    isFavourite: parsedIsFavourite,
  };
};
