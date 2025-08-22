import React, { useState, useEffect, Fragment } from 'react';
import { Dialog, Transition, Combobox } from '@headlessui/react';
import { motion } from 'framer-motion';
import { Search, Command, Hash, User, Code, Mail, Folder } from 'lucide-react';

interface Command {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  action: () => void;
  category: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  const commands: Command[] = [
    {
      id: 'home',
      name: 'Go to Home',
      description: 'Navigate to the hero section',
      icon: Hash,
      action: () => {
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
      category: 'Navigation',
    },
    {
      id: 'about',
      name: 'About Me',
      description: 'Learn more about Muheeb',
      icon: User,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
      category: 'Navigation',
    },
    {
      id: 'skills',
      name: 'Skills & Technologies',
      description: 'View technical skills',
      icon: Code,
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
      category: 'Navigation',
    },
    {
      id: 'projects',
      name: 'Projects Portfolio',
      description: 'Browse project case studies',
      icon: Folder,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
      category: 'Navigation',
    },
    {
      id: 'contact',
      name: 'Contact Information',
      description: 'Get in touch with Muheeb',
      icon: Mail,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
      category: 'Navigation',
    },
  ];

  const filteredCommands = query === ''
    ? commands
    : commands.filter((command) =>
        command.name.toLowerCase().includes(query.toLowerCase()) ||
        command.description.toLowerCase().includes(query.toLowerCase())
      );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // This would be handled by the parent component
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-start justify-center p-4 pt-[10vh]">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-2xl transition-all">
                <Combobox onChange={(command: Command) => command.action()}>
                  <div className="relative">
                    <Search className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                    <Combobox.Input
                      className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                      placeholder="Search commands..."
                      onChange={(event) => setQuery(event.target.value)}
                      autoFocus
                    />
                  </div>

                  {filteredCommands.length > 0 && (
                    <Combobox.Options static className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800 dark:text-gray-200">
                      {filteredCommands.map((command) => (
                        <Combobox.Option
                          key={command.id}
                          value={command}
                          className={({ active }) =>
                            `cursor-pointer select-none px-4 py-2 ${
                              active ? 'bg-blue-600 text-white' : ''
                            }`
                          }
                        >
                          {({ active }) => (
                            <div className="flex items-center space-x-3">
                              <command.icon
                                className={`h-5 w-5 ${
                                  active ? 'text-white' : 'text-gray-400'
                                }`}
                              />
                              <div className="flex-1">
                                <div className="font-medium">{command.name}</div>
                                <div
                                  className={`text-xs ${
                                    active ? 'text-blue-100' : 'text-gray-500'
                                  }`}
                                >
                                  {command.description}
                                </div>
                              </div>
                              <div
                                className={`text-xs ${
                                  active ? 'text-blue-100' : 'text-gray-400'
                                }`}
                              >
                                {command.category}
                              </div>
                            </div>
                          )}
                        </Combobox.Option>
                      ))}
                    </Combobox.Options>
                  )}

                  {query !== '' && filteredCommands.length === 0 && (
                    <div className="px-4 py-14 text-center text-sm text-gray-500">
                      No commands found.
                    </div>
                  )}

                  <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 px-4 py-2 text-xs text-gray-500">
                    <div className="flex items-center space-x-2">
                      <kbd className="inline-flex h-5 w-5 items-center justify-center rounded border bg-white dark:bg-gray-700 font-semibold sm:mx-1">
                        <Command className="h-3 w-3" />
                      </kbd>
                      <span>+</span>
                      <kbd className="inline-flex h-5 w-5 items-center justify-center rounded border bg-white dark:bg-gray-700 font-semibold sm:mx-1">
                        K
                      </kbd>
                      <span>to open</span>
                    </div>
                    <span>ESC to close</span>
                  </div>
                </Combobox>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CommandPalette;