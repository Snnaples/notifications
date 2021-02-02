RegisterNetEvent("snnaples:Notify")
AddEventHandler("snnaples:Notify", function(text,time)
	if string.len(text) > 0 and string.len(text) < 50 then

		SendNUIMessage(json.encode({
			type = "ui",
			text = text,
			time = time
		})) 

	end
end)
