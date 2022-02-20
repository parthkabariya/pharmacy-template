import react from "react";

const GoogleMap  = ({width, height}) => {
    return (
        <iframe
            width={width}
            height={height}
            frameBorder="0" style={{border:0}}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCMEhY6AiRQVZxGluyyyauH__DmCaFclk0&q=Tennessee,+USA" allowFullScreen>
        </iframe>
    )
}

export default GoogleMap;