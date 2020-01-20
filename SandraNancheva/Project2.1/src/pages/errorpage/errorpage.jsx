import React from 'react'
import { Link } from 'react-router-dom';
import './errorpage.scss'
const ErrorPage = () => (
    <div className="error">
        <h1>City not found</h1>
        <Link to="/">Back to Home Page</Link>
    </div>
)

export default ErrorPage
    
