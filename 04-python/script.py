# script.py
#  #1: naive email validation — only checks for "@", accepts "a@b"
#  #2: no deduplication — duplicates counted multiple times
#  #3: grouping logic is wrong — groups by full email, not by domain
#  #4: count is always 1 — doesn't accumulate
import re


users = [
    {"name": "Alice", "email": "alice@gmail.com"},
    {"name": "Bob",   "email": "bob@yahoo.com"},
    {"name": "Carol", "email": "alice@gmail.com"},   
    {"name": "Dave",  "email": "dave@gmail.com"},
    {"name": "Eve",   "email": "not-an-email"},      
    {"name": "Frank", "email": "frank@"},            
]

def validate_email(email):
    # BUG #1: only checks for "@" — accepts "a@", "@b", "@@"
     return bool(re.match(r'^[^@]+@[^@]+\.[^@]+$', email))

def group_by_domain(users):
    original_user = list({u["email"]: u for u in users}.values())  # BUG #2: deduplication by email

    result = {}
    for user in original_user:
        email = user["email"]
        if validate_email(email):
            # BUG #3: uses full email as key instead of domain
            # BUG #2: no deduplication — alice@gmail.com counted twice
            domain = email.split("@")[1]          # BUG #3: should be email.split("@")[1]
            # BUG #4: always sets to 1 instead of incrementing
            result[domain] = result.get(domain, 0) + 1      # BUG #4: should be result.get(domain, 0) + 1
    return result

output = group_by_domain(users)
print(output)
