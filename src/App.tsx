import { useState } from "react";
import { useQuery } from "react-query";
import { Drawer, LinearProgress, Grid, Badge } from "@material-ui/core/";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Item from "./components/Item";
import { Wrapper } from "./App.styles";
import { CartItemType } from "./types/Product";

const apiEndpoint = "https://fakestoreapi.com/products";

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch(apiEndpoint)).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );

  const getTotleItems = () => null;

  const handleAddtoCart = (clickedItem: CartItemType) =>
    console.log(clickedItem);

  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;

  if (error) return <div>Somthing went wrong...</div>;

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddtoCart={handleAddtoCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
