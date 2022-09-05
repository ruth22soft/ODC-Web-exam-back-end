const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');

const app = express();
 app.use(cors({
    origin: '*'}));
    
    const userRoute = require('./routers/users');
const accusationRoute = require('./routers/accusations');
const complainRoute = require('./routers/complains');
const scheduleRoute = require('./routers/schedules');
const recordRoute = require('./routers/records');
const announceRoute = require('./routers/announcements');
const notificationRoute = require('./routers/notifications');


app.use(bodyParser.json());
app.use("/users", userRoute);
app.use("/accusations", accusationRoute);
app.use("/complains", complainRoute);
app.use("/schedule", scheduleRoute);
app.use("/record", recordRoute);
app.use("/notification", notificationRoute);
app.use("/announcement", announceRoute);



module.exports = app