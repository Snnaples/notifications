RegisterNetEvent("snnaples:Notify")
AddEventHandler("snnaples:Notify", function(text,time)
	print(text)
	print(time)
	if string.len(text) > 0 and string.len(text) < 100 then

		SendNUIMessage(json.encode({
			type = "ui",
			text = text,
			time = time
		})) 

	end
end)
