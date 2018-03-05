({
    doInit : function(component, event, helper) 
    { 
        var myAction = component.get("c.currentContact"); 
        myAction.setParams({
            recordId : component.get("v.recordId")
        });
        
        myAction.setCallback(this, function(response) { 
            if(response.getState() === "SUCCESS") { 
                component.set("v.currentContact", response.getReturnValue()); 
            }}); 
        
        $A.enqueueAction(myAction); 
    }
})