# Mini Weather App

## 🌤 Overview

This is a **mini weather react application** that allows users to add multiple cities and view their **current weather conditions** along with a **5-day forecast**. The app provides detailed information such as temperature, humidity, wind speed, and weather conditions using data fetched from [WeatherAPI](https://www.weatherapi.com/).

## 🚀 Features

- **Add Multiple Cities** – Track the weather for different locations.
- **Current Weather Details** – Displays temperature, humidity, wind speed, and condition.
- **5-Day Forecast** – Shows daily min/max temperature and weather conditions.
- **Pin Cities** – Save preferred cities for quick access (persisted in local storage).
- **Loading & Error Handling** – Shows loading state while fetching data, handles API errors gracefully.
- **Remove Cities** – Remove unwanted cities from the list.
- **Retry on Network Errors** – Option to retry fetching weather data.

## 🖥 Tech Stack

- **Frontend:** React + Vite + TypeScript
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS
- **API:** [WeatherAPI](https://www.weatherapi.com/)


## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/crendytech/mini-weather-app.git
cd mini-weather-app
```

### 2️⃣ Install Dependencies

```sh
pnpm install  # or npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file in the root directory and add your API key:

```sh
VITE_WEATHER_API_KEY=your_api_key_here
```

### 4️⃣ Start the Development Server

```sh
pnpm dev  # or npm run dev
```

### 5️⃣ Build for Production

```sh
pnpm build  # or npm run build
```

## 🔗 API Reference

- Weather data is fetched from [WeatherAPI](https://www.weatherapi.com/)
- Base URL: `https://api.weatherapi.com/v1/forecast.json`