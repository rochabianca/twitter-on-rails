# README

## Solving the LoadError: cannot load such file -- bcrypt_ext problem
For solving this you will need to unstall the bcrypt gem and installed again, basically
> gem uninstall bcrypt

Select option 3 if exists.

> gem uninstall bcrypt-ruby

Select option 3 if exists too.

> gem install bcrypt --platform=ruby

and then add this line to your Gemfile

> gem 'bcrypt', platforms: :ruby