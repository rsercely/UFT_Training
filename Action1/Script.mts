Browser("Advantage Shopping").Page("Advantage Shopping").Link("speakersTxt").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("speakersTxt")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("itemToSelect").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Bose Soundlink Bluetooth")_;_script infofile_;_ZIP::ssf2.xml_;_

capturedPrice = Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("itemPrice").GetROProperty("innertext")
priceArray = split (capturedPrice, " ")
DataTable.value("itemPrice",dtGlobalSheet) = priceArray(0)

Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("quantity").Set DataTable("nItems", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save_to_cart").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save to cart")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("shoppingCartLink").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("shoppingCartLink")_;_script infofile_;_ZIP::ssf5.xml_;_

' following gets the total price into the totalPrice column of the data table
' to trigger the fail condition - set a breakpoint on the following line
' when you get to the breakpoint, increase or decrease the item count, which will cause the cart price to change from the expected
Browser("Advantage Shopping").Page("Advantage Shopping").WebTable("PRODUCT NAME").Output CheckPoint("PRODUCT NAME")  @@ hightlight id_;_Browser("Advantage Shopping 2").Page("Advantage Shopping").WebTable("PRODUCT NAME")_;_script infofile_;_ZIP::ssf8.xml_;_
' and this line also gets it, but in a different way, directly into variable
cartTotalItem = Browser("Advantage Shopping").Page("Advantage Shopping").WebTable("PRODUCT NAME").GetCellData (2,5)
totalArray = split(cartTotalItem, " ")
cartTotal = 1*totalArray(2) ' index 1 is $nnn.nn. 1* will convert it to a number
dataTable("cartTotal") = cartTotal ' sheet is optional. defaults to dtGlobalSheet

If ( priceArray(0)*DataTable("nItems",dtGlobalSheet) ) = cartTotal Then
	reporter.ReportEvent micPass, "Cart Check", "Cart was calculated correctly"
else
	reporter.ReportEvent micFail, "Cart Check", "Error in cart total." & vbCR & _
		"Cart had " & cartTotal & " and it should have had " & DataTable("totalPrice", dtGlobalSheet)
End If

'Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("totalPrice").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("REMOVE").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("REMOVE")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME").Click

xxx = 1 ' just so there is a place to set a breakpoint so that variable values can be examined


