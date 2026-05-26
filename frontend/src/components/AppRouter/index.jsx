import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from "../../pages/HomePage";
import NotFoundPage from "../../pages/NotFoundPage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />

                {/* Page 404 */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}