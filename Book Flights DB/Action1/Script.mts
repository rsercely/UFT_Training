'-----------------------------------------------------------------------------------------------------------------------

'-----------------------------------------------------------------------------------------------------------------------
'Desc Programming

Dim fGUI
Dim fUser
Dim fPwd
Dim fBtn

Set fGUI = Description.Create
fGUI("classname").value = "FlightsGUI\.MainWindow"
fGUI("wpftypename").value = "window"

Set fUser = Description.Create
fUser("classname").value = "System\.Windows\.Controls\.TextBox"
fUser("devname").value= "agentName"
fUser("wpftypename").value = "edit"

Set fPwd = Description.Create 'Create an empty description
fPwd("classname").value = "System\.Windows\.Controls\.PasswordBox"
fPwd("devname").value= "password"
fPwd("wpftypename").value = "edit"

Set fBtn = Description.Create 'Create an empty description
fBtn("classname").value = "System\.Windows\.Controls\.Button"
fBtn("devname").value= "okButton"
fBtn("wpftypename").value = "button"
fBtn("enabled").value = "True"

'----------------------------------------------------------------------------------------------------
'Script
'----------------------------------------------------------------------------------------------------
For x = 1 = 1 To 3 Step 1 'loop checking if exists
	If (not WpfWindow(fGUI).Exist) Then
		wait 1
	Else 
		x=1000
	End If
Next

WpfWindow(fGUI).WpfEdit(fUser).Set "John"
WpfWindow(fGUI).WpfEdit(fPwd).SetSecure "5a9701cbec7e"
WpfWindow(fGUI).WpfButton(fBtn).Click

Set fGUI = Nothing
Set fUser = Nothing
Set fPwd = Nothing
Set fBtn = Nothing

foo = 1 ' to make it easy to set a breakpoint so that variable values can be examined

