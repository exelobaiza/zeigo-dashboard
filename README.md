# Zeigo Dashboard

## Descripción
Zeigo Dashboard es una aplicación web moderna desarrollada con React y TypeScript que proporciona una interfaz intuitiva para monitorear y analizar métricas de emisiones y sostenibilidad para Emerson Electric Co. La aplicación permite visualizar datos importantes sobre el impacto ambiental y el rendimiento de diferentes sitios de la empresa.

## Características Principales
- 📊 Visualización de métricas de sitios
- 📈 Gráficos de emisiones
- 🔍 Selector de sitios interactivo
- 📉 Métricas comparativas
- 📱 Diseño responsivo con Tailwind CSS

## Tecnologías Utilizadas
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (para iconos)

## Requisitos Previos
- Node.js (versión recomendada: 18.x o superior)
- npm o yarn

## Instalación

1. Clonar el repositorio:
```bash
git clone [url-del-repositorio]
cd zeigo-dashboard
```

2. Instalar dependencias:
```bash
npm install
# o
yarn install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

## Scripts Disponibles
- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run lint`: Ejecuta el linter
- `npm run preview`: Previsualiza la versión de producción

## Estructura del Proyecto
```
src/
  ├── components/
  │   ├── Header.tsx
  │   ├── Sidebar.tsx
  │   ├── SiteSelector.tsx
  │   ├── SiteMetrics.tsx
  │   ├── EmissionsChart.tsx
  │   ├── EmissionsMetrics.tsx
  │   ├── ComparisonMetric.tsx
  │   └── BottomStats.tsx
  ├── App.tsx
  └── main.tsx
```

## Contribución
Para contribuir al proyecto:
1. Crear un fork del repositorio
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit de los cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Licencia
Este proyecto es privado y está destinado para uso interno de Emerson Electric Co. 