import React, { useState, useEffect, useContext } from "react";
import { func } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { LogIn } from "/workspace/New_StarWars_Blog/src/js/component/login.js";

export function LoginPage() {
	return <LogIn />;
}
