import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      backBehavior="history" 
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1E3A8A",
        tabBarInactiveTintColor: "#999",
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="categorias"
        options={{
          title: "Categorías",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="marcas"
        options={{
          title: "Marcas",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pricetags-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="busqueda"
        options={{
          title: "Buscar",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="pedidos"
        options={{
          title: "Pedidos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="receipt-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Opciones ocultas del menú inferior (Mantienen la barra visible) */}
      <Tabs.Screen
        name="categoria/[id]"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="producto/[id]"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="marca/[id]"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="carrito/index"
        options={{
          href: null,
        }}
      />


<Tabs.Screen
  name="perfil"
  options={{
    href: null,
  }}
/>
<Tabs.Screen
  name="ubicaciones"
  options={{
    href: null,
  }}
/>
<Tabs.Screen
  name="privacidad"
  options={{
    href: null,
  }}
/>
<Tabs.Screen
  name="horario"
  options={{
    href: null,
  }}
/>
<Tabs.Screen
  name="reclamos"
  options={{
    href: null,
  }}
/>

    </Tabs>
  );
}