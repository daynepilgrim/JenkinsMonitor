## Jenkins Deploy Monitor Dashboard

Simple dashboard built with dashing-js to monitor Jenkins deployment.


Download the repo.  Set the correct params in `config.jenkins_job.js` here:

```json
    protocol: 'http',
    username: 'NAME',
    token: 'TOKEN',
    host: 'HOST',
```

Run the command `npm install` and then `npm install -g new-dashing-js`

Run the project `dashing-js start`

Navigate to: `localhost:3030` to see your dashboard