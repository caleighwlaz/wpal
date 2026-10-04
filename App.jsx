import { useState, useRef } from 'react';
import './App.css';
import StationHeader from './StationHeader';
import StreamPlayer from './StreamPlayer';
import CoverageMap from './CoverageMap';

function App() {
  return(
    <div className="background">
      <StationHeader 
        stationName="WPAL"
        location="Ocean County, NJ"
        slogan="Pop and Lock It"
      />
      <StreamPlayer
        stationName="WPAL"
        streamUrl="https://centova87.shoutcastservices.com/proxy/revolution935/stream" 
      />
      <CoverageMap stationName="WPAL"/>
    </div>
  );
}

export default App;
