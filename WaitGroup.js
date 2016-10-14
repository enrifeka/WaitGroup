function WaitGroup() {
    this.todo = 0
    this.done = 0
}
WaitGroup.prototype.Add = function() {
    this.todo += 1
} 
WaitGroup.prototype.Done = function() {
    this.done += 1
}
WaitGroup.prototype.Wait = function(callback) {
    var self = this
    function checkCondition() {
        if(self.todo === self.done) {
            callback()
        } else {
            setTimeout(checkCondition, 1000)
        }
    }
    checkCondition()
}