# Used to wait for multiple asynchronous jobs to end

Example
```
var waitGroup = new WaitGroup()

waitGroup.Add()
setTimeout(function(){
    waitGroup.Done()
}, 3000)

waitGroup.Add()
setTimeout(function(){
    waitGroup.Done()
}, 2000)

waitGroup.Wait(function() {
    alert("Job is done")
})
```