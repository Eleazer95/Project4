import React from 'react';
import Title from '../Title';

export default function Twitter() {
    return (
        <div className="twitter">
            <div className="inside-container">
                <Title title="twitter" color="#e8f4dc"/>
                <div className="twitter-center">
                    <div className="twitter-texts">
                        <p>Message us on Twitter @AyukEleazer.</p>
                        <p>EA Technologies.</p>
                    </div>
                    <div className="twitter-icon">
                        <i className="fab fa-twitter"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
