const healthController = {
    getHealth: (req, res) => {
        res.status(200).json({
            status: "OK",
            message: "API Dashboard IoT à bien démarré",
            timestamp: new Date().toISOString()
        });
    }
};

export default healthController;