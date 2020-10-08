ngrok:
	npx ngrok start dev \
		--authtoken "$(NGROK_AUTHTOKEN)" \
		--config ./ngrok.yml

accounts:
	curl https://mybusiness.googleapis.com/v4/accounts \
		-H "Authorization: Bearer $(API_AUTHTOKEN)"

locations:
	curl "https://mybusiness.googleapis.com/v4/accounts/$(GMB_ACCOUNT_ID)/locations" \
		-H "Authorization: Bearer $(API_AUTHTOKEN)"

localPosts:
	curl "https://mybusiness.googleapis.com/v4/accounts/$(GMB_ACCOUNT_ID)/locations/$(GMB_LOCATION_ID)/localPosts" \
		-H "Authorization: Bearer $(API_AUTHTOKEN)"

refresh:
	curl -X POST "https://www.googleapis.com/oauth2/v4/token" \
		-H "Content-Type: application/json" \
		-d '{ \
        "refresh_token" : "$(GMB_REFRESHTOKEN)", \
        "client_id" : "$(CLIENT_ID)", \
        "client_secret" : "$(CLIENT_SECRET)", \
        "redirect_uri" : "https://fanhub.ngrok.io/api/oauth_done", \
        "grant_type" : "refresh_token" \
		}'
