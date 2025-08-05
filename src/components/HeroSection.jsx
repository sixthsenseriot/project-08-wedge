import * as React from "react";
import Button from "@mui/material/Button";

import { exploreButtonSx, shareButtonSx } from "./HeroSection.styles";
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <div className="HeroSection">
            <h2 className="hero-caption">
                Do more than just get your foot in the door
            </h2>
            <h1 className="hero-header">
                <span className="italic">Wedge </span>
                Your Way In
            </h1>
            <div className="hero-button-container">
                <Button href="/" sx={exploreButtonSx}>
                    Explore Experiences
                </Button>
                <Button href="/" sx={shareButtonSx}>
                    Share Your Story
                </Button>
            </div>
        </div>
    );
};

export default HeroSection;
