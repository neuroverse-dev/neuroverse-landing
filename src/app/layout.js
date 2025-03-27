import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from 'react-hot-toast';
import { ToastErrorSvg, ToastSuccessSvg } from "@/constants/svg";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "NeuroVerse - Build AI Agents Without Coding | Custom Text & Voice AI",
	description: "Create human-like AI agents effortlessly with NeuroVerse. No coding needed! Design text and voice agents, integrate across platforms, and refine over time. Start building today.",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/favicon.ico",
	},

};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<link rel="icon" href="/favicon.ico" />
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Navbar />
				{children}
				<div id="about">
					<Footer />
				</div>
				<Toaster
					position="top-center"
					reverseOrder={false}
					containerClassName="toast-container-custom"
					toastOptions={{
						success: {
							icon: (
								<div className="toast-container-div">
									<ToastSuccessSvg />
								</div>
							),
							style: {
								backgroundColor: '#009049',
								color: '#fff',
								fontSize: '16px',
							},
						},
						error: {
							icon: (
								<div className="toast-container-div">
									<ToastErrorSvg />
								</div>
							),
							style: {
								backgroundColor: 'red',
								color: '#fff',
								fontSize: '16px',
							},
						},
					}}
				/>
			</body>
		</html>
	);
}
