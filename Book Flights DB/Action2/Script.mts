WpfWindow("HPE MyFlight Sample Application").WpfComboBox("fromCity").Select DataTable("fromCity", dtGlobalSheet)
WpfWindow("HPE MyFlight Sample Application").WpfComboBox("toCity").Select DataTable("toCity", dtGlobalSheet)

'-----------------------------------------------------------------------------------------------------------------------

'-----------------------------------------------------------------------------------------------------------------------
'Force a Fail on Interation 2 & Active Recovery Scenario
If cint(Environment.Value("TestIteration")) = (cint(2)) Then
	WpfWindow("HPE MyFlight Sample Application").WpfCalendar("datePicker").SetDate dateAdd("d",-1,date)
	departureDate = WpfWindow("HPE MyFlight Sample Application").WpfCalendar("datePicker").GetROProperty("date")
	If check_data_validity(departureDate) Then
		reporter.ReportEvent micPass, "Date is valid", departureDate
	End If
Else
	WpfWindow("HPE MyFlight Sample Application").WpfCalendar("datePicker").SetDate dateAdd("d",1,date)
    departureDate = WpfWindow("HPE MyFlight Sample Application").WpfCalendar("datePicker").GetROProperty("date")
	If check_data_validity(departureDate) Then
		reporter.ReportEvent micPass, "Date is valid", departureDate
	End If
End If

'-----------------------------------------------------------------------------------------------------------------------

'-----------------------------------------------------------------------------------------------------------------------
WpfWindow("HPE MyFlight Sample Application").WpfComboBox("Class").Select "Business" @@ hightlight id_;_1912467288_;_script infofile_;_ZIP::ssf24.xml_;_
WpfWindow("HPE MyFlight Sample Application").WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_1912464168_;_script infofile_;_ZIP::ssf20.xml_;_
WpfWindow("HPE MyFlight Sample Application").WpfButton("FIND FLIGHTS").Click

foo = 1 ' to make it easy to set a breakpoint so that variable values can be examined

