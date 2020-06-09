const INITIAL_STATE = {
  sections: [
    {
      title: "johnny",
      imageUrl:
        "https://www.cbc.ca/schittscreek/content/images/people/johnny-s5.jpg",
      id: 1,
      linkUrl: "shop/johnny",
    },
    {
      title: "moira",
      imageUrl:
        "https://www.cbc.ca/schittscreek/content/images/people/moira-s5.jpg",
      id: 2,
      linkUrl: "shop/moira",
    },
    {
      title: "twyla",
      imageUrl:
        "https://www.cbc.ca/schittscreek/content/images/people/twyla-s4.jpg",
      id: 3,
      linkUrl: "shop/twyla",
    },
    {
      title: "david",
      imageUrl:
        "https://www.cbc.ca/schittscreek/content/images/people/david-s5.jpg",
      id: 4,
      size: "large",
      linkUrl: "shop/david",
    },
    {
      title: "alexis",
      imageUrl:
        "https://www.cbc.ca/schittscreek/content/images/people/alexis-s5.jpg",
      id: 5,
      size: "large",
      linkUrl: "shop/alexis",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
