import React, { useState, useEffect, useContext } from "react";
import { func } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Register } from "/workspace/New_StarWars_Blog/src/js/component/register.js";

export function RegisterPage() {
	return <Register />;
}
