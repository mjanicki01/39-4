import React, { useState } from "react";

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

export default getRandom;