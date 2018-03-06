({
    showSubcom : function(component, event) 
    {
        if (component.get("v.myCheckBox")) 
        {     
            component.set("v.toggleCheckBox", true);
        }
        else
        {
            component.set("v.toggleCheckBox", false);
        }        
    },
    handleClick : function (component)
    { 
        component.set('v.showText',!component.get('v.showText'));
    }
})