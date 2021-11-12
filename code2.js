gdjs.to_32do_32list_32pageCode = {};
gdjs.to_32do_32list_32pageCode.GDpageObjects1= [];
gdjs.to_32do_32list_32pageCode.GDpageObjects2= [];
gdjs.to_32do_32list_32pageCode.GDstickerbtnObjects1= [];
gdjs.to_32do_32list_32pageCode.GDstickerbtnObjects2= [];
gdjs.to_32do_32list_32pageCode.GDcourse_95titleObjects1= [];
gdjs.to_32do_32list_32pageCode.GDcourse_95titleObjects2= [];
gdjs.to_32do_32list_32pageCode.GDsection_95objObjects1= [];
gdjs.to_32do_32list_32pageCode.GDsection_95objObjects2= [];
gdjs.to_32do_32list_32pageCode.GDToDoListBtnObjects1= [];
gdjs.to_32do_32list_32pageCode.GDToDoListBtnObjects2= [];
gdjs.to_32do_32list_32pageCode.GDtest2Objects1= [];
gdjs.to_32do_32list_32pageCode.GDtest2Objects2= [];
gdjs.to_32do_32list_32pageCode.GDtestObjects1= [];
gdjs.to_32do_32list_32pageCode.GDtestObjects2= [];
gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1= [];
gdjs.to_32do_32list_32pageCode.GDtesttext2Objects2= [];
gdjs.to_32do_32list_32pageCode.GDtesttextObjects1= [];
gdjs.to_32do_32list_32pageCode.GDtesttextObjects2= [];
gdjs.to_32do_32list_32pageCode.GDtext2Objects1= [];
gdjs.to_32do_32list_32pageCode.GDtext2Objects2= [];
gdjs.to_32do_32list_32pageCode.GDtextObjects1= [];
gdjs.to_32do_32list_32pageCode.GDtextObjects2= [];
gdjs.to_32do_32list_32pageCode.GDcheck_95box2Objects1= [];
gdjs.to_32do_32list_32pageCode.GDcheck_95box2Objects2= [];
gdjs.to_32do_32list_32pageCode.GDcheck_95box1Objects1= [];
gdjs.to_32do_32list_32pageCode.GDcheck_95box1Objects2= [];
gdjs.to_32do_32list_32pageCode.GDbox2Objects1= [];
gdjs.to_32do_32list_32pageCode.GDbox2Objects2= [];
gdjs.to_32do_32list_32pageCode.GDboxObjects1= [];
gdjs.to_32do_32list_32pageCode.GDboxObjects2= [];
gdjs.to_32do_32list_32pageCode.GDdelete2Objects1= [];
gdjs.to_32do_32list_32pageCode.GDdelete2Objects2= [];
gdjs.to_32do_32list_32pageCode.GDdelete1Objects1= [];
gdjs.to_32do_32list_32pageCode.GDdelete1Objects2= [];
gdjs.to_32do_32list_32pageCode.GDedit_95btn2Objects1= [];
gdjs.to_32do_32list_32pageCode.GDedit_95btn2Objects2= [];
gdjs.to_32do_32list_32pageCode.GDedit_95btn1Objects1= [];
gdjs.to_32do_32list_32pageCode.GDedit_95btn1Objects2= [];

gdjs.to_32do_32list_32pageCode.conditionTrue_0 = {val:false};
gdjs.to_32do_32list_32pageCode.condition0IsTrue_0 = {val:false};
gdjs.to_32do_32list_32pageCode.condition1IsTrue_0 = {val:false};
gdjs.to_32do_32list_32pageCode.condition2IsTrue_0 = {val:false};


gdjs.to_32do_32list_32pageCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("check_box2"), gdjs.to_32do_32list_32pageCode.GDcheck_95box2Objects1);
/* Reuse gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("text2"), gdjs.to_32do_32list_32pageCode.GDtext2Objects1);
{gdjs.evtTools.storage.readStringFromJSONFile("main_storage", "textbox2", runtimeScene, runtimeScene.getVariables().getFromIndex(3));
}{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDtext2Objects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDtext2Objects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(3)));
}
}{gdjs.evtTools.storage.readNumberFromJSONFile("main_storage", "animFrame2", runtimeScene, runtimeScene.getVariables().getFromIndex(1));
}{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDcheck_95box2Objects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDcheck_95box2Objects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}
}}

}


};gdjs.to_32do_32list_32pageCode.mapOfGDgdjs_46to_9532do_9532list_9532pageCode_46GDToDoListBtnObjects1Objects = Hashtable.newFrom({"ToDoListBtn": gdjs.to_32do_32list_32pageCode.GDToDoListBtnObjects1});gdjs.to_32do_32list_32pageCode.mapOfGDgdjs_46to_9532do_9532list_9532pageCode_46GDcheck_9595box1Objects1Objects = Hashtable.newFrom({"check_box1": gdjs.to_32do_32list_32pageCode.GDcheck_95box1Objects1});gdjs.to_32do_32list_32pageCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.to_32do_32list_32pageCode.GDcheck_95box1Objects1 */
/* Reuse gdjs.to_32do_32list_32pageCode.GDtextObjects1 */

gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val = false;
gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.to_32do_32list_32pageCode.GDcheck_95box1Objects1.length;i<l;++i) {
    if ( !(gdjs.to_32do_32list_32pageCode.GDcheck_95box1Objects1[i].isCurrentAnimationName("green")) ) {
        gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val = true;
        gdjs.to_32do_32list_32pageCode.GDcheck_95box1Objects1[k] = gdjs.to_32do_32list_32pageCode.GDcheck_95box1Objects1[i];
        ++k;
    }
}
gdjs.to_32do_32list_32pageCode.GDcheck_95box1Objects1.length = k;}if ( gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.to_32do_32list_32pageCode.GDtextObjects1.length;i<l;++i) {
    if ( gdjs.to_32do_32list_32pageCode.GDtextObjects1[i].getString() != "" ) {
        gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val = true;
        gdjs.to_32do_32list_32pageCode.GDtextObjects1[k] = gdjs.to_32do_32list_32pageCode.GDtextObjects1[i];
        ++k;
    }
}
gdjs.to_32do_32list_32pageCode.GDtextObjects1.length = k;}}
if (gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val) {
/* Reuse gdjs.to_32do_32list_32pageCode.GDcheck_95box1Objects1 */
{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDcheck_95box1Objects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDcheck_95box1Objects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) + 1);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) + 1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("main_storage", "animFrame1", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}}

}


};gdjs.to_32do_32list_32pageCode.mapOfGDgdjs_46to_9532do_9532list_9532pageCode_46GDdelete1Objects1Objects = Hashtable.newFrom({"delete1": gdjs.to_32do_32list_32pageCode.GDdelete1Objects1});gdjs.to_32do_32list_32pageCode.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("check_box1"), gdjs.to_32do_32list_32pageCode.GDcheck_95box1Objects1);
{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDcheck_95box1Objects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDcheck_95box1Objects1[i].setAnimation(0);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.storage.writeNumberInJSONFile("main_storage", "animFrame1", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}}

}


};gdjs.to_32do_32list_32pageCode.mapOfGDgdjs_46to_9532do_9532list_9532pageCode_46GDedit_9595btn1Objects1Objects = Hashtable.newFrom({"edit_btn1": gdjs.to_32do_32list_32pageCode.GDedit_95btn1Objects1});gdjs.to_32do_32list_32pageCode.mapOfGDgdjs_46to_9532do_9532list_9532pageCode_46GDcheck_9595box2Objects1Objects = Hashtable.newFrom({"check_box2": gdjs.to_32do_32list_32pageCode.GDcheck_95box2Objects1});gdjs.to_32do_32list_32pageCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.to_32do_32list_32pageCode.GDcheck_95box2Objects1 */
/* Reuse gdjs.to_32do_32list_32pageCode.GDtext2Objects1 */

gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val = false;
gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.to_32do_32list_32pageCode.GDcheck_95box2Objects1.length;i<l;++i) {
    if ( !(gdjs.to_32do_32list_32pageCode.GDcheck_95box2Objects1[i].isCurrentAnimationName("green")) ) {
        gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val = true;
        gdjs.to_32do_32list_32pageCode.GDcheck_95box2Objects1[k] = gdjs.to_32do_32list_32pageCode.GDcheck_95box2Objects1[i];
        ++k;
    }
}
gdjs.to_32do_32list_32pageCode.GDcheck_95box2Objects1.length = k;}if ( gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.to_32do_32list_32pageCode.GDtext2Objects1.length;i<l;++i) {
    if ( gdjs.to_32do_32list_32pageCode.GDtext2Objects1[i].getString() != "" ) {
        gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val = true;
        gdjs.to_32do_32list_32pageCode.GDtext2Objects1[k] = gdjs.to_32do_32list_32pageCode.GDtext2Objects1[i];
        ++k;
    }
}
gdjs.to_32do_32list_32pageCode.GDtext2Objects1.length = k;}}
if (gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val) {
/* Reuse gdjs.to_32do_32list_32pageCode.GDcheck_95box2Objects1 */
{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDcheck_95box2Objects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDcheck_95box2Objects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) + 1);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) + 1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("main_storage", "animFrame2", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}}

}


};gdjs.to_32do_32list_32pageCode.mapOfGDgdjs_46to_9532do_9532list_9532pageCode_46GDdelete2Objects1Objects = Hashtable.newFrom({"delete2": gdjs.to_32do_32list_32pageCode.GDdelete2Objects1});gdjs.to_32do_32list_32pageCode.eventsList4 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("check_box2"), gdjs.to_32do_32list_32pageCode.GDcheck_95box2Objects1);
{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDcheck_95box2Objects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDcheck_95box2Objects1[i].setAnimation(0);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{gdjs.evtTools.storage.writeNumberInJSONFile("main_storage", "animFrame2", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}}

}


};gdjs.to_32do_32list_32pageCode.mapOfGDgdjs_46to_9532do_9532list_9532pageCode_46GDedit_9595btn2Objects1Objects = Hashtable.newFrom({"edit_btn2": gdjs.to_32do_32list_32pageCode.GDedit_95btn2Objects1});gdjs.to_32do_32list_32pageCode.eventsList5 = function(runtimeScene) {

{


gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val = false;
{
gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("check_box1"), gdjs.to_32do_32list_32pageCode.GDcheck_95box1Objects1);
gdjs.copyArray(runtimeScene.getObjects("testtext"), gdjs.to_32do_32list_32pageCode.GDtesttextObjects1);
gdjs.copyArray(runtimeScene.getObjects("testtext2"), gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1);
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.to_32do_32list_32pageCode.GDtextObjects1);
{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDtesttextObjects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDtesttextObjects1[i].activate(false);
}
}{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1[i].activate(false);
}
}{gdjs.evtTools.storage.readStringFromJSONFile("main_storage", "textbox1", runtimeScene, runtimeScene.getVariables().getFromIndex(2));
}{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDtextObjects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDtextObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}
}{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDtesttextObjects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDtesttextObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}
}{gdjs.evtTools.storage.readNumberFromJSONFile("main_storage", "animFrame1", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDcheck_95box1Objects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDcheck_95box1Objects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}
}
{ //Subevents
gdjs.to_32do_32list_32pageCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ToDoListBtn"), gdjs.to_32do_32list_32pageCode.GDToDoListBtnObjects1);

gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val = false;
gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val = false;
{
gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.to_32do_32list_32pageCode.mapOfGDgdjs_46to_9532do_9532list_9532pageCode_46GDToDoListBtnObjects1Objects, runtimeScene, true, false);
}if ( gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val ) {
{
gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main page", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("testtext"), gdjs.to_32do_32list_32pageCode.GDtesttextObjects1);

gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.to_32do_32list_32pageCode.GDtesttextObjects1.length;i<l;++i) {
    if ( gdjs.to_32do_32list_32pageCode.GDtesttextObjects1[i].isActivated() ) {
        gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val = true;
        gdjs.to_32do_32list_32pageCode.GDtesttextObjects1[k] = gdjs.to_32do_32list_32pageCode.GDtesttextObjects1[i];
        ++k;
    }
}
gdjs.to_32do_32list_32pageCode.GDtesttextObjects1.length = k;}if (gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val) {
/* Reuse gdjs.to_32do_32list_32pageCode.GDtesttextObjects1 */
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.to_32do_32list_32pageCode.GDtextObjects1);
{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDtextObjects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDtextObjects1[i].setString(gdjs.evtTools.string.subStr((( gdjs.to_32do_32list_32pageCode.GDtesttextObjects1.length === 0 ) ? "" :gdjs.to_32do_32list_32pageCode.GDtesttextObjects1[0].getString()), 0, 80));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("check_box1"), gdjs.to_32do_32list_32pageCode.GDcheck_95box1Objects1);

gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val = false;
gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val = false;
{
gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.to_32do_32list_32pageCode.mapOfGDgdjs_46to_9532do_9532list_9532pageCode_46GDcheck_9595box1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val ) {
{
gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("testtext"), gdjs.to_32do_32list_32pageCode.GDtesttextObjects1);
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.to_32do_32list_32pageCode.GDtextObjects1);
{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDtesttextObjects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDtesttextObjects1[i].activate(false);
}
}{runtimeScene.getVariables().getFromIndex(2).setString((( gdjs.to_32do_32list_32pageCode.GDtextObjects1.length === 0 ) ? "" :gdjs.to_32do_32list_32pageCode.GDtextObjects1[0].getString()));
}{gdjs.evtTools.storage.writeStringInJSONFile("main_storage", "textbox1", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}
{ //Subevents
gdjs.to_32do_32list_32pageCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("delete1"), gdjs.to_32do_32list_32pageCode.GDdelete1Objects1);

gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val = false;
gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val = false;
{
gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.to_32do_32list_32pageCode.mapOfGDgdjs_46to_9532do_9532list_9532pageCode_46GDdelete1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val ) {
{
gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("testtext"), gdjs.to_32do_32list_32pageCode.GDtesttextObjects1);
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.to_32do_32list_32pageCode.GDtextObjects1);
{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDtextObjects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDtextObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDtesttextObjects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDtesttextObjects1[i].setString("");
}
}{runtimeScene.getVariables().getFromIndex(2).setString("");
}{gdjs.evtTools.storage.writeStringInJSONFile("main_storage", "textbox1", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}
{ //Subevents
gdjs.to_32do_32list_32pageCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("edit_btn1"), gdjs.to_32do_32list_32pageCode.GDedit_95btn1Objects1);

gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val = false;
gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val = false;
{
gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.to_32do_32list_32pageCode.mapOfGDgdjs_46to_9532do_9532list_9532pageCode_46GDedit_9595btn1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val ) {
{
gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("check_box1"), gdjs.to_32do_32list_32pageCode.GDcheck_95box1Objects1);
gdjs.copyArray(runtimeScene.getObjects("testtext"), gdjs.to_32do_32list_32pageCode.GDtesttextObjects1);
gdjs.copyArray(runtimeScene.getObjects("testtext2"), gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1);
{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDtesttextObjects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDtesttextObjects1[i].activate(true);
}
}{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1[i].activate(false);
}
}{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDtesttextObjects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDtesttextObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}
}{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDcheck_95box1Objects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDcheck_95box1Objects1[i].setAnimation(0);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("testtext2"), gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1);

gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1.length;i<l;++i) {
    if ( gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1[i].isActivated() ) {
        gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val = true;
        gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1[k] = gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1[i];
        ++k;
    }
}
gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1.length = k;}if (gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val) {
/* Reuse gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("text2"), gdjs.to_32do_32list_32pageCode.GDtext2Objects1);
{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDtext2Objects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDtext2Objects1[i].setString(gdjs.evtTools.string.subStr((( gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1.length === 0 ) ? "" :gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1[0].getString()), 0, 80));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("check_box2"), gdjs.to_32do_32list_32pageCode.GDcheck_95box2Objects1);

gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val = false;
gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val = false;
{
gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.to_32do_32list_32pageCode.mapOfGDgdjs_46to_9532do_9532list_9532pageCode_46GDcheck_9595box2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val ) {
{
gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("testtext2"), gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1);
gdjs.copyArray(runtimeScene.getObjects("text2"), gdjs.to_32do_32list_32pageCode.GDtext2Objects1);
{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1[i].activate(false);
}
}{runtimeScene.getVariables().getFromIndex(3).setString((( gdjs.to_32do_32list_32pageCode.GDtext2Objects1.length === 0 ) ? "" :gdjs.to_32do_32list_32pageCode.GDtext2Objects1[0].getString()));
}{gdjs.evtTools.storage.writeStringInJSONFile("main_storage", "textbox2", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(3)));
}
{ //Subevents
gdjs.to_32do_32list_32pageCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("delete2"), gdjs.to_32do_32list_32pageCode.GDdelete2Objects1);

gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val = false;
gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val = false;
{
gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.to_32do_32list_32pageCode.mapOfGDgdjs_46to_9532do_9532list_9532pageCode_46GDdelete2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val ) {
{
gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("testtext2"), gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1);
gdjs.copyArray(runtimeScene.getObjects("text2"), gdjs.to_32do_32list_32pageCode.GDtext2Objects1);
{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDtext2Objects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDtext2Objects1[i].setString("");
}
}{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1[i].setString("");
}
}{runtimeScene.getVariables().getFromIndex(3).setString("");
}{gdjs.evtTools.storage.writeStringInJSONFile("main_storage", "textbox2", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(3)));
}
{ //Subevents
gdjs.to_32do_32list_32pageCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("edit_btn2"), gdjs.to_32do_32list_32pageCode.GDedit_95btn2Objects1);

gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val = false;
gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val = false;
{
gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.to_32do_32list_32pageCode.mapOfGDgdjs_46to_9532do_9532list_9532pageCode_46GDedit_9595btn2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.to_32do_32list_32pageCode.condition0IsTrue_0.val ) {
{
gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.to_32do_32list_32pageCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("check_box2"), gdjs.to_32do_32list_32pageCode.GDcheck_95box2Objects1);
gdjs.copyArray(runtimeScene.getObjects("testtext"), gdjs.to_32do_32list_32pageCode.GDtesttextObjects1);
gdjs.copyArray(runtimeScene.getObjects("testtext2"), gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1);
{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1[i].activate(true);
}
}{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDtesttextObjects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDtesttextObjects1[i].activate(false);
}
}{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.to_32do_32list_32pageCode.GDcheck_95box2Objects1.length ;i < len;++i) {
    gdjs.to_32do_32list_32pageCode.GDcheck_95box2Objects1[i].setAnimation(0);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


};

gdjs.to_32do_32list_32pageCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.to_32do_32list_32pageCode.GDpageObjects1.length = 0;
gdjs.to_32do_32list_32pageCode.GDpageObjects2.length = 0;
gdjs.to_32do_32list_32pageCode.GDstickerbtnObjects1.length = 0;
gdjs.to_32do_32list_32pageCode.GDstickerbtnObjects2.length = 0;
gdjs.to_32do_32list_32pageCode.GDcourse_95titleObjects1.length = 0;
gdjs.to_32do_32list_32pageCode.GDcourse_95titleObjects2.length = 0;
gdjs.to_32do_32list_32pageCode.GDsection_95objObjects1.length = 0;
gdjs.to_32do_32list_32pageCode.GDsection_95objObjects2.length = 0;
gdjs.to_32do_32list_32pageCode.GDToDoListBtnObjects1.length = 0;
gdjs.to_32do_32list_32pageCode.GDToDoListBtnObjects2.length = 0;
gdjs.to_32do_32list_32pageCode.GDtest2Objects1.length = 0;
gdjs.to_32do_32list_32pageCode.GDtest2Objects2.length = 0;
gdjs.to_32do_32list_32pageCode.GDtestObjects1.length = 0;
gdjs.to_32do_32list_32pageCode.GDtestObjects2.length = 0;
gdjs.to_32do_32list_32pageCode.GDtesttext2Objects1.length = 0;
gdjs.to_32do_32list_32pageCode.GDtesttext2Objects2.length = 0;
gdjs.to_32do_32list_32pageCode.GDtesttextObjects1.length = 0;
gdjs.to_32do_32list_32pageCode.GDtesttextObjects2.length = 0;
gdjs.to_32do_32list_32pageCode.GDtext2Objects1.length = 0;
gdjs.to_32do_32list_32pageCode.GDtext2Objects2.length = 0;
gdjs.to_32do_32list_32pageCode.GDtextObjects1.length = 0;
gdjs.to_32do_32list_32pageCode.GDtextObjects2.length = 0;
gdjs.to_32do_32list_32pageCode.GDcheck_95box2Objects1.length = 0;
gdjs.to_32do_32list_32pageCode.GDcheck_95box2Objects2.length = 0;
gdjs.to_32do_32list_32pageCode.GDcheck_95box1Objects1.length = 0;
gdjs.to_32do_32list_32pageCode.GDcheck_95box1Objects2.length = 0;
gdjs.to_32do_32list_32pageCode.GDbox2Objects1.length = 0;
gdjs.to_32do_32list_32pageCode.GDbox2Objects2.length = 0;
gdjs.to_32do_32list_32pageCode.GDboxObjects1.length = 0;
gdjs.to_32do_32list_32pageCode.GDboxObjects2.length = 0;
gdjs.to_32do_32list_32pageCode.GDdelete2Objects1.length = 0;
gdjs.to_32do_32list_32pageCode.GDdelete2Objects2.length = 0;
gdjs.to_32do_32list_32pageCode.GDdelete1Objects1.length = 0;
gdjs.to_32do_32list_32pageCode.GDdelete1Objects2.length = 0;
gdjs.to_32do_32list_32pageCode.GDedit_95btn2Objects1.length = 0;
gdjs.to_32do_32list_32pageCode.GDedit_95btn2Objects2.length = 0;
gdjs.to_32do_32list_32pageCode.GDedit_95btn1Objects1.length = 0;
gdjs.to_32do_32list_32pageCode.GDedit_95btn1Objects2.length = 0;

gdjs.to_32do_32list_32pageCode.eventsList5(runtimeScene);
return;

}

gdjs['to_32do_32list_32pageCode'] = gdjs.to_32do_32list_32pageCode;
