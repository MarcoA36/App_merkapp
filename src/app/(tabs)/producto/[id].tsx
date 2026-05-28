// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
// } from "react-native";

// import { useState } from "react";

// import {
//   useLocalSearchParams,
// } from "expo-router";

// import { products } from "@/data/products";

// import { useCartStore } from "@/store/cartStore";

// import ProductImage from "@/components/Product/ProductImage";

// import ProductInfo from "@/components/Product/ProductInfo";

// import QuantitySelector from "@/components/Product/QuantitySelector";

// import AddToCartButton from "@/components/Product/AddToCartButton";

// import CollectionHeader from "@/components/Headers/CollectionHeader";

// import Screen from "@/components/Layout/Screen";

// import {
//   colors,
//   spacing,
//   layout,
// } from "@/theme/theme";

// export default function ProductoDetalle() {

//   const { id } =
//     useLocalSearchParams();

//   const addToCart = useCartStore(
//     (s) => s.addToCart
//   );

//   const product =
//     products.find(
//       (p) => p.id === id
//     );

//   const [quantity, setQuantity] =
//     useState(1);

//   if (!product) return null;

//   const subtotal =
//     product.price * quantity;

//   return (
//     <Screen
//       backgroundColor={
//         colors.white
//       }
//     >
//       <CollectionHeader
//         title="Detalle del producto"
//       />

//       <ScrollView
//         showsVerticalScrollIndicator={
//           false
//         }
//       >
//         <ProductImage
//           image={product.image}
//         />

//         <ProductInfo
//           name={product.name}
//           unitPrice={product.price}
//           subtotal={subtotal}
//         >
//           <QuantitySelector
//             quantity={quantity}
//             onDecrease={() =>
//               quantity > 1 &&
//               setQuantity(
//                 quantity - 1
//               )
//             }
//             onIncrease={() =>
//               setQuantity(
//                 quantity + 1
//               )
//             }
//           />
//         </ProductInfo>

//         <AddToCartButton
//           onPress={() => {
//             for (
//               let i = 0;
//               i < quantity;
//               i++
//             ) {
//               addToCart(product);
//             }
//           }}
//         />

//         <Text style={styles.disclaimer}>
//           Imagen ilustrativa. El
//           diseño y presentación del
//           producto pueden variar.
//         </Text>

//         <View
//           style={{
//             height: 120,
//           }}
//         />
//       </ScrollView>
//     </Screen>
//   );
// }

// const styles = StyleSheet.create({
//   disclaimer: {
//     fontSize: 12,

//     color: "#999",

//     lineHeight: 18,

//     paddingHorizontal:
//       layout.screenPadding,

//     marginTop: spacing.xl,

//     marginBottom: spacing.xxl,
//   },
// });


import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";

// 1. Importamos useEffect
import { useState, useEffect } from "react";

import { router, useLocalSearchParams } from "expo-router";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import ProductImage from "@/components/Product/ProductImage";
import ProductInfo from "@/components/Product/ProductInfo";
import QuantitySelector from "@/components/Product/QuantitySelector";
import AddToCartButton from "@/components/Product/AddToCartButton";
import CollectionHeader from "@/components/Headers/CollectionHeader";
import Screen from "@/components/Layout/Screen";
import { colors, spacing, layout } from "@/theme/theme";

export default function ProductoDetalle() {
  const { id } = useLocalSearchParams();
  const addToCart = useCartStore((s) => s.addToCart);

  const product = products.find((p) => p.id === id);

  const [quantity, setQuantity] = useState(1);

  // 2. SOLUCIÓN: Resetear la cantidad cada vez que cambie el ID del producto
  useEffect(() => {
    setQuantity(1);
  }, [id]);

  if (!product) return null;

  const subtotal = product.price * quantity;

  return (
    <Screen backgroundColor={colors.white}>
      <CollectionHeader title="Detalle del producto" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductImage image={product.image} />

        <ProductInfo
          name={product.name}
          unitPrice={product.price}
          subtotal={subtotal}
        >
          <QuantitySelector
            quantity={quantity}
            onDecrease={() => quantity > 1 && setQuantity(quantity - 1)}
            onIncrease={() => setQuantity(quantity + 1)}
          />
        </ProductInfo>

        {/* <AddToCartButton
          onPress={() => {
            for (let i = 0; i < quantity; i++) {
              addToCart(product);
            }
          }}
        /> */}
        <AddToCartButton
          onPress={() => {
            // Añadimos los productos al store del carrito
            for (let i = 0; i < quantity; i++) {
              addToCart(product);
            }

            // 2. Disparamos la confirmación interactiva
            Alert.alert(
              "¡Agregado al carrito!",
              `Sumaste ${quantity} ${quantity === 1 ? 'unidad' : 'unidades'} de ${product.name}.`,
              [
                {
                  text: "Seguir comprando",
                  onPress: () => {
                    setQuantity(1); // 3. Reseteamos el contador local a 1
                    router.back();  // 4. Lo invitamos a volver atrás a la lista de categorías
                  },
                  style: "cancel",
                },
                {
                  text: "Ver mi carrito",
                  onPress: () => {
                    setQuantity(1); // Reseteamos el contador local a 1
                    router.push("/carrito"); // 5. Lo mandamos directo a la pantalla del carrito
                  },
                },
              ],
              { cancelable: false }
            );
          }}
        />

        <Text style={styles.disclaimer}>
          Imagen ilustrativa. El diseño y presentación del producto pueden variar.
        </Text>

        <View style={{ height: 120 }} />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  disclaimer: {
    fontSize: 12,
    color: "#999",
    lineHeight: 18,
    paddingHorizontal: layout.screenPadding,
    marginTop: spacing.xl,
    marginBottom: spacing.xxl,
  },
});