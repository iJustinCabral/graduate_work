import sqlite3

from hacksport.problem import files_from_directory, PHPApp


class Problem(PHPApp):
    files = files_from_directory("webroot/")
    php_root = "webroot/"
