# Replace ls with eza
alias la 'eza -a --color=always --group-directories-first --icons'  # all files and dirs
alias ll 'eza -l --color=always --group-directories-first --icons'  # long format
alias lt 'eza -aT --color=always --group-directories-first --icons' # tree listing
alias l. "eza -a | grep -e '^\.'"                                   # show only dotfiles
alias lal 'eza -al --color=always --group-directories-first --icons'
alias ls 'eza --color=always --group-directories-first --icons'

# Common use
alias psmem 'ps auxf | sort -nr -k 4'
alias psmem10 'ps auxf | sort -nr -k 4 | head -10'
alias .. 'cd ..'
alias ... 'cd ../..'
alias .... 'cd ../../..'
alias ..... 'cd ../../../..'
alias ...... 'cd ../../../../..'
alias dir 'dir --color=auto'
alias vdir 'vdir --color=auto'
alias grep 'grep --color=auto'
alias fgrep 'grep -F --color=auto'
alias egrep 'grep -E --color=auto'
alias hw 'hwinfo --short'                                           # Hardware Info

# Get the error messages from journalctl
alias jctl "journalctl -p 3 -xb"

# root commands
alias dnf 'sudo dnf5'
alias reboot 'sudo reboot'
alias shutdown 'sudo systemctl poweroff'
alias systemctl 'sudo systemctl'
alias update 'sudo dnf5 --refresh update'
alias yum 'sudo dnf5'

# use nvim
alias vi nvim
# don't use the bash version of which
alias which 'type -P'
