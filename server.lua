

RegisterCommand("da", function(source)
local user_id = vRP.getUserId({source})
local source = vRP.getUserSource({user_id})
TriggerClientEvent("snnaples:Notify",source,"salut",4000)

end)