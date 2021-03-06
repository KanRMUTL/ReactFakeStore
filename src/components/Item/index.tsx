import Button from "@material-ui/core/Button";
import { CartItemType } from "../../types/Product";
import { Wrapper } from "./Item.styles";

type Props = {
  item: CartItemType;
  handleAddtoCart: (clickedItem: CartItemType) => void;
};

const Item = ({ item, handleAddtoCart }: Props) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddtoCart(item)}>Add to Cart</Button>
  </Wrapper>
);

export default Item;
