import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "johnny",
          imageUrl:
            "https://www.cbc.ca/schittscreek/content/images/people/johnny-s5.jpg",
          id: 1,
        },
        {
          title: "moira",
          imageUrl:
            "https://www.cbc.ca/schittscreek/content/images/people/moira-s5.jpg",
          id: 2,
        },
        {
          title: "twyla",
          imageUrl:
            "https://www.cbc.ca/schittscreek/content/images/people/twyla-s4.jpg",
          id: 3,
        },
        {
          title: "david",
          imageUrl:
            "https://www.cbc.ca/schittscreek/content/images/people/david-s5.jpg",
          id: 4,
          size: "large",
        },
        {
          title: "alexis",
          imageUrl:
            "https://www.cbc.ca/schittscreek/content/images/people/alexis-s5.jpg",
          id: 5,
          size: "large",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
