import app from "./app";

app.listen(process.env.PORT || 3000, () => {
    console.log('mmartan server runing on port ' + process.env.PORT);
})