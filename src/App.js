import { EntypoSprite } from "@entypo-icons/react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import BasixAdmin from "./component/BasixAdmin/BasixAdmin";
import Alerts from "./pages/Alerts/Alerts";
import Badges from "./pages/Badges/Badges";
import Tabs from "./pages/Tabs/Tabs";
import AdvancedForm from "./pages/AdvancedForm/AdvancedForm";
import BasicForm from "./pages/BasicForm/BasicForm";
import FormWizard from "./pages/FormWizard/FormWizard";
import Button from "./pages/Button/Button";
import Cards from "./pages/Cards/Cards";
import ChartJS from "./pages/ChartJS/ChartJS";
import Dashboard from "./pages/Dashboard/Dashboard";
import Error404 from "./pages/Error404/Error404";
import Error500 from "./pages/Error500/Error500";
import Recharts from "./pages/Recharts/Recharts";
import GoogleMaps from "./pages/GoogleMaps/GoogleMaps";
import Grids from "./pages/Grids/Grids";
import Brandico from "./component/Icon/Brandico";
import Entypo from "./component/Icon/Entypo";
import FontAwesome from "./component/Icon/FontAwesome";
import Fontelico from "./component/Icon/Fontelico";
import Icons from "./pages/Icons/Icons";
import LeafletMaps from "./pages/LeafletMaps/LeafletMaps";
import Login from "./pages/Login/Login";
import Modals from "./pages/Modals/Modals";
import ProgressBars from "./pages/ProgressBars/ProgressBars";
import Register from "./pages/Register/Register";
import SocialButtons from "./pages/SocialButtons/SocialButtons";
import Tables from "./pages/Tables/Tables";
import Typography from "./pages/Typography/Typography";
import Widgets from "./pages/Widgets/Widgets";
import ApexCharts from "./pages/ApexCharts/ApexCharts";

function App() {
  return (
    <>
      <EntypoSprite />
      <Routes>
        <Route path="/" element={<BasixAdmin></BasixAdmin>}>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/components/button" element={<Button />}></Route>
          <Route path="/components/badges" element={<Badges />}></Route>
          <Route path="/components/tabs" element={<Tabs />}></Route>
          <Route
            path="/components/socialbuttons"
            element={<SocialButtons />}
          ></Route>
          <Route path="/components/cards" element={<Cards />}></Route>
          <Route path="/components/alerts" element={<Alerts />}></Route>
          <Route
            path="/components/progressbars"
            element={<ProgressBars />}
          ></Route>
          <Route path="/components/modals" element={<Modals />}></Route>
          <Route path="/components/grids" element={<Grids />}></Route>
          <Route path="/components/typography" element={<Typography />}></Route>
          <Route path="/tables" element={<Tables />}></Route>
          <Route path="/forms/basic-form" element={<BasicForm />}></Route>
          <Route path="/forms/advanced-form" element={<AdvancedForm />}></Route>
          <Route path="/forms/form-wizard" element={<FormWizard />}></Route>
          <Route path="/icons" element={<Icons />}></Route>
          <Route path="/brandico" element={<Brandico />}></Route>
          <Route path="/entypo" element={<Entypo />}></Route>
          <Route path="/fontawesome" element={<FontAwesome />}></Route>
          <Route path="/fontelico" element={<Fontelico />}></Route>
          <Route path="/widgets" element={<Widgets />}></Route>
          <Route path="/charts/chart-js" element={<ChartJS />}></Route>
          <Route path="/charts/apexcharts" element={<ApexCharts />}></Route>
          <Route path="/charts/recharts" element={<Recharts />}></Route>
          <Route path="/maps/google-map" element={<GoogleMaps />}></Route>
          <Route path="/maps/leaflet-map" element={<LeafletMaps />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/error404" element={<Error404 />}></Route>
        <Route path="/error500" element={<Error500 />}></Route>
      </Routes>
    </>
  );
}

export default App;
