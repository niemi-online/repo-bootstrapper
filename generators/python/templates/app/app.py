#!/usr/local/bin/python
"""Main app module
"""

import time
import sys

import logs
import conf
import structlog

from conf import Configuration

def main():
    """Initializes the application
    """
     # Load settings and create the config object
    config = Configuration()
    settings = config.settings

    # Set up logger
    logs.configure_logging(settings['log_level'], settings['log_mode'])
    logger = structlog.get_logger()

    while True:
        logger.info("Waking up just to do nothing!")
        logger.info("Sleeping for %s seconds", settings['update_interval'])
        time.sleep(settings['update_interval'])

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        sys.exit(0)
