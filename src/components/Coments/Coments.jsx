import React from "react";
import { Comment, Header } from "semantic-ui-react";

const Coments = () => (
  <div>
    <Comment.Group size="massive">
      <Comment>
        <Comment.Avatar
          as="a"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThzNX6B2WbQS6m--WE7b-Evuu6Ks6FZu9_Yr8LuDmm9LizP_z_"
        />
        <Comment.Content>
          <Comment.Author as="a">Matt</Comment.Author>
          <Comment.Text>Muito bom</Comment.Text>
        </Comment.Content>
      </Comment>
      <Comment>
        <Comment.Avatar
          as="a"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThzNX6B2WbQS6m--WE7b-Evuu6Ks6FZu9_Yr8LuDmm9LizP_z_"
        />
        <Comment.Content>
          <Comment.Author as="a">Joe</Comment.Author>
          <Comment.Text>
            gostei muito do lugar, com certeza voltarei
          </Comment.Text>
        </Comment.Content>
      </Comment>
    </Comment.Group>
  </div>
);

export default Coments;
