import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function BMIResult() {
    const [bmiResult, setBmiResult] = useState('');

    useEffect(() => {
        // Mengambil hasil perhitungan BMI dari local storage saat komponen dimuat
        const storedResult = localStorage.getItem('bmiResult');
        if (storedResult) {
            setBmiResult(storedResult);
        }
    }, []);

    return (
        <>
            <Header />
            <div className="sm:w-[38rem] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
                <div className="bg-[#04726C] px-10 py-10 text-center text-white">
                    <p className="font-serif text-2xl font-semibold tracking-wider">BMI Result</p>
                </div>

                <div className="space-y-4 px-8 py-10">
                    <div className="text-center">
                        {bmiResult ? (
                            <p>{bmiResult}</p>
                        ) : (
                            <p>No BMI result available.</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
